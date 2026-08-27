package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.Employee;
import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.entity.Spindle;
import io.jmix.core.DataManager;
import io.jmix.core.EntitySet;
import io.jmix.core.FileRef;
import io.jmix.core.FileStorage;
import io.jmix.core.FileStorageLocator;
import io.jmix.core.SaveContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * Imports one Calypso file: parse (pure), dedupe on (partId, measurementDateTime),
 * resolve claimed traceability strings against Spindle/Employee master data, store
 * the original file, persist report + characteristics atomically.
 */
@Service
public class MeasurementImportService {

    private static final Logger log = LoggerFactory.getLogger(MeasurementImportService.class);

    private final CalypsoReportParserService parserService;
    private final DataManager dataManager;
    private final FileStorageLocator fileStorageLocator;

    public MeasurementImportService(CalypsoReportParserService parserService,
                                    DataManager dataManager,
                                    FileStorageLocator fileStorageLocator) {
        this.parserService = parserService;
        this.dataManager = dataManager;
        this.fileStorageLocator = fileStorageLocator;
    }

    public ImportResult importFile(InputStream in, String fileName) {
        byte[] data;
        try {
            data = in.readAllBytes();
        } catch (IOException e) {
            throw new UncheckedIOException("Cannot read uploaded file", e);
        }

        ParsedReport parsed = parserService.parse(new ByteArrayInputStream(data), fileName);
        List<String> warnings = new ArrayList<>(parsed.warnings());

        checkDuplicate(parsed);

        MeasurementReport report = dataManager.create(MeasurementReport.class);
        report.setPlanName(parsed.planName());
        report.setCalypsoVersion(parsed.calypsoVersion());
        report.setPartName(parsed.partName());
        report.setDrawingNo(parsed.drawingNo());
        report.setPartId(parsed.partId());
        report.setBatch(parsed.batch());
        report.setWorksOrder(parsed.worksOrder());
        report.setOperation(parsed.operation());
        report.setMillShift(parsed.millShift());
        report.setCmmName(parsed.cmmName());
        report.setMeasurementDateTime(parsed.measurementDateTime());
        report.setTemperature(parsed.temperature());
        report.setProbe(parsed.probe());
        report.setSoakStart(parsed.soakStart());
        report.setPartTempAtStart(parsed.partTempAtStart());
        report.setAlignment(parsed.alignment());
        report.setInputSource(parsed.inputSource());
        report.setResult(parsed.result());
        report.setDispositionRoute(parsed.dispositionRoute());
        report.setSourceFileName(fileName);
        report.setImportedAt(LocalDateTime.now());

        boolean discrepancy = resolveTraceability(parsed, report, warnings);
        report.setTraceabilityDiscrepancy(discrepancy);

        applyCounts(parsed, report, warnings);

        report.setSourceFile(storeOriginalFile(fileName, data, warnings));

        SaveContext saveContext = new SaveContext();
        saveContext.saving(report);
        int sequenceFallback = 0;
        for (ParsedCharacteristic parsedRow : parsed.characteristics()) {
            MeasurementCharacteristic row = dataManager.create(MeasurementCharacteristic.class);
            row.setReport(report);
            row.setSequence(parsedRow.sequence() > 0 ? parsedRow.sequence() : ++sequenceFallback);
            row.setName(parsedRow.name());
            row.setType(parsedRow.type());
            row.setTypeRaw(parsedRow.typeRaw());
            row.setNominal(parsedRow.nominal());
            row.setActual(parsedRow.actual());
            row.setDeviation(parsedRow.deviation());
            row.setTolMinus(parsedRow.tolMinus());
            row.setTolPlus(parsedRow.tolPlus());
            row.setOutOfTol(parsedRow.outOfTol());
            saveContext.saving(row);
        }

        EntitySet saved = dataManager.save(saveContext);
        MeasurementReport savedReport = saved.get(report);
        log.info("Imported measurement report {} from '{}' ({} characteristics, {} warnings)",
                savedReport.getId(), fileName, parsed.characteristics().size(), warnings.size());
        return new ImportResult(savedReport, List.copyOf(warnings));
    }

    private void checkDuplicate(ParsedReport parsed) {
        Optional<MeasurementReport> existing;
        if (parsed.measurementDateTime() != null) {
            existing = dataManager.load(MeasurementReport.class)
                    .query("select e from MeasurementReport e " +
                            "where e.partId = :partId and e.measurementDateTime = :dt")
                    .parameter("partId", parsed.partId())
                    .parameter("dt", parsed.measurementDateTime())
                    .optional();
        } else {
            existing = dataManager.load(MeasurementReport.class)
                    .query("select e from MeasurementReport e " +
                            "where e.partId = :partId and e.measurementDateTime is null")
                    .parameter("partId", parsed.partId())
                    .optional();
        }
        existing.ifPresent(report -> {
            throw new DuplicateReportException(
                    "A report for part '" + parsed.partId() + "' measured at "
                            + parsed.measurementDateTime() + " already exists (id "
                            + report.getId() + ")",
                    report.getId());
        });
    }

    /**
     * Resolves file-claimed traceability strings against master data. The raw
     * strings are always stored verbatim; a failed or ambiguous resolution leaves
     * the association null and flags the report instead of failing the import.
     *
     * @return true when any raw value failed to resolve
     */
    private boolean resolveTraceability(ParsedReport parsed, MeasurementReport report,
                                        List<String> warnings) {
        boolean discrepancy = false;

        report.setMachineIdRaw(parsed.machineIdRaw());
        if (parsed.machineIdRaw() != null) {
            Optional<Spindle> spindle = dataManager.load(Spindle.class)
                    .query("select e from Spindle e where e.numberMark = :mark")
                    .parameter("mark", parsed.machineIdRaw())
                    .optional();
            if (spindle.isPresent()) {
                report.setMachine(spindle.get());
            } else {
                discrepancy = true;
                warnings.add("Machine ID '" + parsed.machineIdRaw() + "' does not match any spindle");
            }
        }

        report.setMillOperatorRaw(parsed.millOperatorRaw());
        Employee operator = resolveEmployee(parsed.millOperatorRaw(), "Mill Operator", warnings);
        if (parsed.millOperatorRaw() != null && operator == null) {
            discrepancy = true;
        }
        report.setMillOperator(operator);

        report.setInspectorRaw(parsed.inspectorRaw());
        Employee inspector = resolveEmployee(parsed.inspectorRaw(), "Inspector", warnings);
        if (parsed.inspectorRaw() != null && inspector == null) {
            discrepancy = true;
        }
        report.setInspector(inspector);

        return discrepancy;
    }

    /**
     * File format is "F.Lastname" (initial + dot + surname). Match rule: lastName
     * equalsIgnoreCase surname AND firstName starts with the initial. Ambiguous or
     * no match resolves to null.
     */
    @Nullable
    private Employee resolveEmployee(@Nullable String raw, String fieldLabel, List<String> warnings) {
        if (raw == null || raw.isBlank()) {
            return null;
        }
        int dot = raw.indexOf('.');
        if (dot <= 0 || dot == raw.length() - 1) {
            warnings.add(fieldLabel + " '" + raw + "' is not in the expected 'F.Lastname' format");
            return null;
        }
        String initial = raw.substring(0, dot).trim();
        String surname = raw.substring(dot + 1).trim();

        List<Employee> bySurname = dataManager.load(Employee.class)
                .query("select e from Employee e where lower(e.lastName) = :surname")
                .parameter("surname", surname.toLowerCase())
                .list();
        List<Employee> matches = bySurname.stream()
                .filter(e -> e.getFirstName() != null
                        && e.getFirstName().toLowerCase().startsWith(initial.toLowerCase()))
                .toList();

        if (matches.size() == 1) {
            return matches.get(0);
        }
        if (matches.isEmpty()) {
            warnings.add(fieldLabel + " '" + raw + "' does not match any employee");
        } else {
            warnings.add(fieldLabel + " '" + raw + "' is ambiguous — matches "
                    + matches.size() + " employees");
        }
        return null;
    }

    /**
     * Recomputes in/out-of-tol counts from the parsed rows and prefers them over
     * the file's summary block when they disagree.
     */
    private void applyCounts(ParsedReport parsed, MeasurementReport report, List<String> warnings) {
        int computedTotal = parsed.characteristics().size();
        int computedOutOfTol = (int) parsed.characteristics().stream()
                .filter(ParsedCharacteristic::outOfTol).count();
        int computedInTol = computedTotal - computedOutOfTol;

        if (parsed.characteristicsTotal() != null
                && !Objects.equals(parsed.characteristicsTotal(), computedTotal)) {
            warnings.add("Summary total (" + parsed.characteristicsTotal()
                    + ") disagrees with parsed row count (" + computedTotal + ") — using row count");
        }
        if (parsed.characteristicsOutOfTol() != null
                && !Objects.equals(parsed.characteristicsOutOfTol(), computedOutOfTol)) {
            warnings.add("Summary out-of-tolerance count (" + parsed.characteristicsOutOfTol()
                    + ") disagrees with parsed rows (" + computedOutOfTol + ") — using row count");
        }
        report.setCharacteristicsTotal(computedTotal);
        report.setCharacteristicsInTol(computedInTol);
        report.setCharacteristicsOutOfTol(computedOutOfTol);
    }

    @Nullable
    private FileRef storeOriginalFile(String fileName, byte[] data, List<String> warnings) {
        try {
            FileStorage fileStorage = fileStorageLocator.getDefault();
            return fileStorage.saveStream(fileName, new ByteArrayInputStream(data));
        } catch (RuntimeException e) {
            log.warn("Could not store original file '{}'", fileName, e);
            warnings.add("Original file could not be stored: " + e.getMessage());
            return null;
        }
    }
}
