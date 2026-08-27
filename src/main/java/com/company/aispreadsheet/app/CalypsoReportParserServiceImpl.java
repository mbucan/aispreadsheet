package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.CharacteristicType;
import com.company.aispreadsheet.entity.ReportResult;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class CalypsoReportParserServiceImpl implements CalypsoReportParserService {

    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ofPattern("HH:mm:ss");
    private static final DateTimeFormatter DATE_TIME_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private static final int ZONE_HEADER = 0;
    private static final int ZONE_TABLE = 1;
    private static final int ZONE_SUMMARY = 2;

    @Override
    public ParsedReport parse(InputStream in, String fileName) {
        List<String> lines = readLines(in);

        List<String> warnings = new ArrayList<>();
        Map<String, String> header = new HashMap<>();
        Map<String, String> summary = new HashMap<>();
        List<ParsedCharacteristic> rows = new ArrayList<>();

        int zone = ZONE_HEADER;
        for (String line : lines) {
            String trimmed = line.trim();
            switch (zone) {
                case ZONE_HEADER -> {
                    if (isTableHeader(trimmed)) {
                        zone = ZONE_TABLE;
                    } else if (!trimmed.isEmpty()) {
                        parseKeyValuePairs(trimmed, header);
                    }
                }
                case ZONE_TABLE -> {
                    if (trimmed.isEmpty() || isSummaryMarker(trimmed)) {
                        zone = ZONE_SUMMARY;
                    } else {
                        ParsedCharacteristic row = parseRow(trimmed, rows.size() + 1, warnings);
                        if (row != null) {
                            rows.add(row);
                        }
                    }
                }
                case ZONE_SUMMARY -> {
                    if (!trimmed.isEmpty() && !isSummaryMarker(trimmed)) {
                        parseKeyValuePairs(trimmed, summary);
                    }
                }
                default -> throw new IllegalStateException("Unexpected zone " + zone);
            }
        }

        String partId = header.get("part id");
        if (partId == null || partId.isBlank()) {
            throw new CalypsoParseException("File '" + fileName + "' has no Part ID header field");
        }
        if (rows.isEmpty()) {
            throw new CalypsoParseException("File '" + fileName + "' contains no characteristic rows");
        }

        LocalDateTime measurementDateTime =
                combineDateTime(header.get("date"), header.get("time"), warnings);
        LocalDateTime soakStart = parseDateTime(header.get("part soak start"), "Part Soak Start", warnings);

        int computedTotal = rows.size();
        int computedOutOfTol = (int) rows.stream().filter(ParsedCharacteristic::outOfTol).count();
        if (summary.isEmpty()) {
            warnings.add("Summary block missing — totals computed from characteristic rows");
        }
        Integer total = firstNonNull(parseInt(summary.get("characteristics total"), "Characteristics Total", warnings),
                computedTotal);
        Integer inTol = firstNonNull(parseInt(summary.get("in tolerance"), "In Tolerance", warnings),
                computedTotal - computedOutOfTol);
        Integer outOfTol = firstNonNull(parseInt(summary.get("out of tolerance"), "Out of Tolerance", warnings),
                computedOutOfTol);
        ReportResult result = mapResult(summary.get("result"), warnings);

        return new ParsedReport(
                header.get("plan"),
                header.get("calypso version"),
                header.get("part name"),
                header.get("drawing no"),
                partId,
                header.get("batch"),
                header.get("works order"),
                header.get("operation"),
                header.get("machine id"),
                header.get("mill operator"),
                header.get("mill shift"),
                header.get("inspector"),
                header.get("cmm"),
                measurementDateTime,
                header.get("temperature"),
                header.get("probe"),
                soakStart,
                header.get("part temp at start"),
                header.get("alignment"),
                header.get("input source"),
                total,
                inTol,
                outOfTol,
                result,
                summary.get("disposition route"),
                fileName,
                List.copyOf(rows),
                List.copyOf(warnings));
    }

    private List<String> readLines(InputStream in) {
        List<String> lines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8))) {
            String line;
            boolean first = true;
            while ((line = reader.readLine()) != null) {
                if (first) {
                    if (!line.isEmpty() && line.charAt(0) == '\uFEFF') {
                        line = line.substring(1);
                    }
                    first = false;
                }
                lines.add(line);
            }
        } catch (IOException e) {
            throw new CalypsoParseException("Cannot read file content", e);
        }
        return lines;
    }

    private boolean isTableHeader(String trimmed) {
        return trimmed.toLowerCase(Locale.ROOT).startsWith("characteristic;type;nominal");
    }

    private boolean isSummaryMarker(String trimmed) {
        String lower = trimmed.toLowerCase(Locale.ROOT);
        return lower.equals("summary") || lower.startsWith("summary;");
    }

    /**
     * Header and summary rows are {@code key;value;key;value} sequences. Keys are
     * stored lowercased; empty keys (trailing semicolons) are skipped; unknown keys
     * are simply carried in the map and ignored by the caller.
     */
    private void parseKeyValuePairs(String line, Map<String, String> target) {
        String[] parts = line.split(";", -1);
        for (int i = 0; i < parts.length; i += 2) {
            String key = parts[i].trim();
            if (key.isEmpty()) {
                continue;
            }
            String value = i + 1 < parts.length ? parts[i + 1].trim() : "";
            target.put(key.toLowerCase(Locale.ROOT), value.isEmpty() ? null : value);
        }
    }

    @Nullable
    private ParsedCharacteristic parseRow(String line, int sequence, List<String> warnings) {
        String[] cols = line.split(";", -1);
        String name = cols[0].trim();
        if (name.isEmpty()) {
            warnings.add("Row " + sequence + ": empty characteristic name — row skipped");
            return null;
        }
        String typeRaw = cols.length > 1 ? trimToNull(cols[1]) : null;
        CharacteristicType type = CharacteristicType.fromCalypso(typeRaw);
        BigDecimal nominal = parseDecimal(cols, 2, name, "nominal", warnings);
        BigDecimal actual = parseDecimal(cols, 3, name, "actual", warnings);
        BigDecimal deviation = parseDecimal(cols, 4, name, "deviation", warnings);
        BigDecimal tolMinus = parseDecimal(cols, 5, name, "tol-", warnings);
        BigDecimal tolPlus = parseDecimal(cols, 6, name, "tol+", warnings);
        boolean outOfTol = cols.length > 7 && "*".equals(cols[7].trim());
        return new ParsedCharacteristic(sequence, name, typeRaw, type,
                nominal, actual, deviation, tolMinus, tolPlus, outOfTol);
    }

    @Nullable
    private BigDecimal parseDecimal(String[] cols, int index, String rowName, String field,
                                    List<String> warnings) {
        if (index >= cols.length) {
            return null;
        }
        String token = cols[index].trim();
        if (token.isEmpty()) {
            return null;
        }
        try {
            return new BigDecimal(token);
        } catch (NumberFormatException e) {
            warnings.add("Row '" + rowName + "': unparseable " + field + " value '" + token + "'");
            return null;
        }
    }

    @Nullable
    private LocalDateTime combineDateTime(@Nullable String date, @Nullable String time,
                                          List<String> warnings) {
        if (date == null || date.isBlank()) {
            warnings.add("Date header field missing — measurement date/time not set");
            return null;
        }
        try {
            LocalDate d = LocalDate.parse(date.trim(), DATE_FORMAT);
            if (time == null || time.isBlank()) {
                warnings.add("Time header field missing — using start of day");
                return d.atStartOfDay();
            }
            return LocalDateTime.of(d, LocalTime.parse(time.trim(), TIME_FORMAT));
        } catch (DateTimeParseException e) {
            warnings.add("Unparseable Date/Time header values '" + date + "' / '" + time + "'");
            return null;
        }
    }

    @Nullable
    private LocalDateTime parseDateTime(@Nullable String value, String fieldName, List<String> warnings) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return LocalDateTime.parse(value.trim(), DATE_TIME_FORMAT);
        } catch (DateTimeParseException e) {
            warnings.add("Unparseable " + fieldName + " value '" + value + "'");
            return null;
        }
    }

    @Nullable
    private Integer parseInt(@Nullable String value, String fieldName, List<String> warnings) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return Integer.parseInt(value.trim());
        } catch (NumberFormatException e) {
            warnings.add("Unparseable " + fieldName + " value '" + value + "'");
            return null;
        }
    }

    private ReportResult mapResult(@Nullable String raw, List<String> warnings) {
        if (raw == null || raw.isBlank()) {
            return ReportResult.UNKNOWN;
        }
        String value = raw.trim();
        if (value.equalsIgnoreCase("PASS")) {
            return ReportResult.PASS;
        }
        if (value.equalsIgnoreCase("REWORK / CONCESSION REVIEW")) {
            return ReportResult.REWORK_CONCESSION;
        }
        warnings.add("Unknown Result value '" + raw + "' — stored as UNKNOWN");
        return ReportResult.UNKNOWN;
    }

    @Nullable
    private String trimToNull(String s) {
        String trimmed = s.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }

    private Integer firstNonNull(@Nullable Integer value, Integer fallback) {
        return value != null ? value : fallback;
    }
}
