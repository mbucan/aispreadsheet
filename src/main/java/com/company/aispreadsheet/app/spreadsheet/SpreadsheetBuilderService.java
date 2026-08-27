package com.company.aispreadsheet.app.spreadsheet;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.formula.eval.NotImplementedException;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Name;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.ss.util.WorkbookUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jspecify.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Builds and mutates Excel workbooks from AI-produced specifications using Apache POI, and runs
 * a per-cell formula verification pass so defective formulas are reported back to the model.
 * <p>
 * Pure computation: no UI, no security, no storage — input and output are byte arrays.
 */
@Service
public class SpreadsheetBuilderService {

    private static final Logger log = LoggerFactory.getLogger(SpreadsheetBuilderService.class);

    static final int MAX_SHEETS = 10;
    static final int MAX_CELLS = 5000;
    static final int DESCRIBE_CELL_LIMIT = 400;

    /**
     * Builds a new workbook from the given specification.
     *
     * @throws SpreadsheetBuildException if the spec is empty or exceeds the size guard rails
     */
    public BuildResult buildWorkbook(SpreadsheetSpec spec) {
        List<SheetSpec> sheets = spec.getSheets();
        if (sheets.isEmpty()) {
            throw new SpreadsheetBuildException("The specification contains no sheets.");
        }
        if (sheets.size() > MAX_SHEETS) {
            throw new SpreadsheetBuildException(
                    "Too many sheets (" + sheets.size() + "), maximum is " + MAX_SHEETS + ". Reduce the scope.");
        }
        int totalCells = sheets.stream().mapToInt(s -> s.getCells().size()).sum();
        if (totalCells > MAX_CELLS) {
            throw new SpreadsheetBuildException(
                    "Too many cells (" + totalCells + "), maximum is " + MAX_CELLS + " per call. Reduce the scope.");
        }

        List<CellIssue> issues = new ArrayList<>();
        int cellCount = 0;
        try (XSSFWorkbook workbook = new XSSFWorkbook()) {
            Map<String, CellStyle> styleCache = new HashMap<>();
            for (SheetSpec sheetSpec : sheets) {
                String sheetName = safeSheetName(sheetSpec.getName(), workbook.getNumberOfSheets());
                Sheet sheet = workbook.createSheet(sheetName);
                cellCount += writeCells(sheet, sheetSpec.getCells(), styleCache, issues);
                applyMerges(sheet, sheetSpec.getMerges(), issues);
                applyColumnWidths(sheet, sheetSpec.getColumnWidths(), issues);
            }
            applyNamedRanges(workbook, spec.getNamedRanges(), issues);
            verifyFormulas(workbook, issues);
            return new BuildResult(toBytes(workbook), cellCount, issues);
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to serialize the workbook", e);
        }
    }

    /**
     * Applies targeted cell changes to an existing workbook and re-verifies all formulas.
     */
    public BuildResult applyUpdates(byte[] existingXlsx, List<CellUpdate> updates) {
        if (updates.isEmpty()) {
            throw new SpreadsheetBuildException("The update request contains no cell changes.");
        }
        if (updates.size() > MAX_CELLS) {
            throw new SpreadsheetBuildException(
                    "Too many cell changes (" + updates.size() + "), maximum is " + MAX_CELLS + " per call.");
        }
        List<CellIssue> issues = new ArrayList<>();
        try (XSSFWorkbook workbook = new XSSFWorkbook(new ByteArrayInputStream(existingXlsx))) {
            Map<String, CellStyle> styleCache = new HashMap<>();
            int changed = 0;
            for (CellUpdate update : updates) {
                if (applyUpdate(workbook, update, styleCache, issues)) {
                    changed++;
                }
            }
            verifyFormulas(workbook, issues);
            return new BuildResult(toBytes(workbook), changed, issues);
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to read or serialize the workbook", e);
        }
    }

    /**
     * Renders the workbook as a compact text listing of every non-blank cell (capped at
     * {@value #DESCRIBE_CELL_LIMIT} cells) so the model can inspect current content.
     */
    public String describeWorkbook(byte[] xlsx) {
        StringBuilder sb = new StringBuilder();
        DataFormatter formatter = new DataFormatter();
        try (XSSFWorkbook workbook = new XSSFWorkbook(new ByteArrayInputStream(xlsx))) {
            FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
            int printed = 0;
            for (int s = 0; s < workbook.getNumberOfSheets(); s++) {
                Sheet sheet = workbook.getSheetAt(s);
                sb.append("Sheet \"").append(sheet.getSheetName()).append("\":\n");
                for (CellRangeAddress region : sheet.getMergedRegions()) {
                    sb.append("  merged: ").append(region.formatAsString()).append('\n');
                }
                for (Row row : sheet) {
                    for (Cell cell : row) {
                        if (cell.getCellType() == CellType.BLANK) {
                            continue;
                        }
                        if (printed >= DESCRIBE_CELL_LIMIT) {
                            sb.append("  ...truncated, more cells not shown\n");
                            return sb.toString();
                        }
                        sb.append("  ").append(new CellReference(cell.getRowIndex(), cell.getColumnIndex())
                                .formatAsString()).append(": ");
                        appendCellDescription(sb, cell, evaluator, formatter);
                        sb.append('\n');
                        printed++;
                    }
                }
            }
            return sb.toString();
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to read the workbook", e);
        }
    }

    private void appendCellDescription(StringBuilder sb, Cell cell, FormulaEvaluator evaluator,
                                       DataFormatter formatter) {
        if (cell.getCellType() == CellType.FORMULA) {
            sb.append('=').append(cell.getCellFormula()).append(" -> ");
            try {
                sb.append(formatter.formatCellValue(cell, evaluator));
            } catch (RuntimeException e) {
                sb.append("(not evaluable: ").append(e.getClass().getSimpleName()).append(')');
            }
        } else {
            sb.append(formatter.formatCellValue(cell));
        }
        String format = cell.getCellStyle().getDataFormatString();
        if (format != null && !"General".equals(format)) {
            sb.append(" [").append(format).append(']');
        }
    }

    private int writeCells(Sheet sheet, List<CellSpec> cells, Map<String, CellStyle> styleCache,
                           List<CellIssue> issues) {
        int written = 0;
        for (CellSpec cellSpec : cells) {
            if (cellSpec == null || cellSpec.getRef() == null || cellSpec.getRef().isBlank()) {
                issues.add(new CellIssue(sheet.getSheetName(), "?", "cell without a \"ref\" was skipped"));
                continue;
            }
            CellReference ref;
            try {
                ref = new CellReference(cellSpec.getRef().trim());
                if (ref.getRow() < 0 || ref.getCol() < 0) {
                    throw new IllegalArgumentException("negative row/column");
                }
            } catch (RuntimeException e) {
                issues.add(new CellIssue(sheet.getSheetName(), cellSpec.getRef(),
                        "invalid cell reference, cell skipped"));
                continue;
            }
            Cell cell = getOrCreateCell(sheet, ref.getRow(), ref.getCol());
            writeContent(cell, cellSpec.getValue(), cellSpec.getFormula(), cellSpec.getStyle(),
                    cellSpec.getNumberFormat(), styleCache, issues);
            written++;
        }
        return written;
    }

    private boolean applyUpdate(Workbook workbook, CellUpdate update, Map<String, CellStyle> styleCache,
                                List<CellIssue> issues) {
        String sheetName = update.getSheet() == null || update.getSheet().isBlank()
                ? null : update.getSheet().trim();
        if (sheetName == null) {
            issues.add(new CellIssue("?", update.getRef() == null ? "?" : update.getRef(),
                    "update without a \"sheet\" name was skipped"));
            return false;
        }
        Sheet sheet = workbook.getSheet(sheetName);
        if (sheet == null) {
            sheet = workbook.createSheet(safeSheetName(sheetName, workbook.getNumberOfSheets()));
        }
        if (update.getRef() == null || update.getRef().isBlank()) {
            issues.add(new CellIssue(sheet.getSheetName(), "?", "update without a \"ref\" was skipped"));
            return false;
        }
        CellReference ref;
        try {
            ref = new CellReference(update.getRef().trim());
            if (ref.getRow() < 0 || ref.getCol() < 0) {
                throw new IllegalArgumentException("negative row/column");
            }
        } catch (RuntimeException e) {
            issues.add(new CellIssue(sheet.getSheetName(), update.getRef(),
                    "invalid cell reference, update skipped"));
            return false;
        }
        Cell cell = getOrCreateCell(sheet, ref.getRow(), ref.getCol());
        if (Boolean.TRUE.equals(update.getClear())) {
            cell.setBlank();
            return true;
        }
        writeContent(cell, update.getValue(), update.getFormula(), update.getStyle(),
                update.getNumberFormat(), styleCache, issues);
        return true;
    }

    private void writeContent(Cell cell, @Nullable String value, @Nullable String formula,
                              @Nullable String styleName, @Nullable String numberFormat,
                              Map<String, CellStyle> styleCache, List<CellIssue> issues) {
        String sheetName = cell.getSheet().getSheetName();
        String refString = new CellReference(cell.getRowIndex(), cell.getColumnIndex()).formatAsString();

        StyleToken token = StyleToken.fromString(styleName);
        if (styleName != null && !styleName.isBlank() && token == null) {
            issues.add(new CellIssue(sheetName, refString,
                    "unknown style token \"" + styleName + "\" ignored"));
        }

        boolean isFormula = formula != null && !formula.isBlank();
        boolean isDateValue = false;

        if (isFormula) {
            if (value != null && !value.isBlank()) {
                issues.add(new CellIssue(sheetName, refString,
                        "both value and formula were given; the formula was used"));
            }
            String cleanFormula = formula.trim();
            if (cleanFormula.startsWith("=")) {
                cleanFormula = cleanFormula.substring(1);
            }
            try {
                cell.setCellFormula(cleanFormula);
            } catch (FormulaParseException e) {
                issues.add(new CellIssue(sheetName, refString,
                        "formula could not be parsed (" + firstLine(e.getMessage())
                                + "); written as text instead"));
                cell.setCellValue("=" + cleanFormula);
                isFormula = false;
            }
        } else if (value != null && !value.isBlank()) {
            String trimmed = value.trim();
            Object parsed = parseValue(trimmed);
            if (parsed instanceof BigDecimal number) {
                cell.setCellValue(number.doubleValue());
            } else if (parsed instanceof Boolean bool) {
                cell.setCellValue(bool);
            } else if (parsed instanceof LocalDate date) {
                cell.setCellValue(date);
                isDateValue = true;
            } else {
                cell.setCellValue(trimmed);
            }
        } else {
            cell.setBlank();
        }

        applyStyle(cell, token, numberFormat, isFormula, isDateValue, styleCache);
    }

    private Object parseValue(String value) {
        try {
            return new BigDecimal(value);
        } catch (NumberFormatException ignored) {
            // not numeric
        }
        if ("true".equalsIgnoreCase(value) || "false".equalsIgnoreCase(value)) {
            return Boolean.parseBoolean(value);
        }
        try {
            return LocalDate.parse(value);
        } catch (DateTimeParseException ignored) {
            // not an ISO date
        }
        return value;
    }

    private void applyStyle(Cell cell, @Nullable StyleToken token, @Nullable String numberFormat,
                            boolean isFormula, boolean isDateValue, Map<String, CellStyle> styleCache) {
        boolean crossSheet = isFormula && cell.getCellType() == CellType.FORMULA
                && cell.getCellFormula().contains("!");
        StyleToken effectiveToken = token;
        if (effectiveToken == null) {
            if (isDateValue) {
                effectiveToken = StyleToken.DATE;
            } else if (isFormula) {
                effectiveToken = StyleToken.FORMULA;
            }
        }
        StyleToken.FontTint tint = effectiveToken != null ? effectiveToken.getTint() : StyleToken.FontTint.BLACK;
        if (crossSheet && token == null) {
            tint = StyleToken.FontTint.GREEN;
        }
        String format = numberFormat != null && !numberFormat.isBlank()
                ? numberFormat.trim()
                : (effectiveToken != null ? effectiveToken.getDefaultNumberFormat() : null);

        if (effectiveToken == null && format == null && tint == StyleToken.FontTint.BLACK) {
            return;
        }

        Workbook workbook = cell.getSheet().getWorkbook();
        final StyleToken finalToken = effectiveToken;
        final String finalFormat = format;
        final StyleToken.FontTint finalTint = tint;
        String cacheKey = (finalToken == null ? "-" : finalToken.name())
                + '|' + (finalFormat == null ? "-" : finalFormat) + '|' + finalTint;
        CellStyle style = styleCache.computeIfAbsent(cacheKey,
                key -> createStyle(workbook, finalToken, finalFormat, finalTint));
        cell.setCellStyle(style);
    }

    private CellStyle createStyle(Workbook workbook, @Nullable StyleToken token,
                                  @Nullable String format, StyleToken.FontTint tint) {
        CellStyle style = workbook.createCellStyle();
        Font font = workbook.createFont();
        if (token != null) {
            font.setBold(token.isBold());
            font.setItalic(token.isItalic());
            if (token == StyleToken.TITLE) {
                font.setFontHeightInPoints((short) 14);
            }
            if (token.isGrayFill()) {
                style.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
                style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
                style.setBorderBottom(BorderStyle.THIN);
            }
        }
        switch (tint) {
            case BLUE -> font.setColor(IndexedColors.BLUE.getIndex());
            case GREEN -> font.setColor(IndexedColors.GREEN.getIndex());
            case GRAY -> font.setColor(IndexedColors.GREY_50_PERCENT.getIndex());
            case BLACK -> font.setColor(IndexedColors.BLACK.getIndex());
        }
        style.setFont(font);
        if (format != null) {
            style.setDataFormat(workbook.createDataFormat().getFormat(format));
        }
        return style;
    }

    private void applyMerges(Sheet sheet, List<String> merges, List<CellIssue> issues) {
        for (String merge : merges) {
            if (merge == null || merge.isBlank()) {
                continue;
            }
            try {
                sheet.addMergedRegion(CellRangeAddress.valueOf(merge.trim()));
            } catch (RuntimeException e) {
                issues.add(new CellIssue(sheet.getSheetName(), merge,
                        "invalid or overlapping merge range ignored"));
            }
        }
    }

    private void applyColumnWidths(Sheet sheet, List<String> columnWidths, List<CellIssue> issues) {
        for (String entry : columnWidths) {
            if (entry == null || entry.isBlank()) {
                continue;
            }
            String[] parts = entry.split("=", 2);
            try {
                int column = CellReference.convertColStringToIndex(parts[0].trim());
                int chars = Integer.parseInt(parts[1].trim());
                sheet.setColumnWidth(column, Math.min(Math.max(chars, 2), 120) * 256);
            } catch (RuntimeException e) {
                issues.add(new CellIssue(sheet.getSheetName(), entry,
                        "invalid column width entry ignored, expected e.g. \"B=14\""));
            }
        }
    }

    private void applyNamedRanges(Workbook workbook, List<String> namedRanges, List<CellIssue> issues) {
        for (String entry : namedRanges) {
            if (entry == null || entry.isBlank()) {
                continue;
            }
            String[] parts = entry.split("=", 2);
            if (parts.length != 2 || parts[0].isBlank() || parts[1].isBlank()) {
                issues.add(new CellIssue("workbook", entry,
                        "invalid named range ignored, expected e.g. \"GrowthRate=Inputs!$B$2\""));
                continue;
            }
            try {
                Name name = workbook.createName();
                name.setNameName(parts[0].trim());
                name.setRefersToFormula(parts[1].trim());
            } catch (RuntimeException e) {
                issues.add(new CellIssue("workbook", entry, "named range could not be created and was ignored"));
            }
        }
    }

    /**
     * Evaluates every formula cell individually — the local equivalent of the recalculation
     * verification step in Anthropic's spreadsheet skills. Per-cell evaluation (instead of
     * {@code evaluateAll}) keeps one unsupported function from aborting the whole pass.
     */
    private void verifyFormulas(Workbook workbook, List<CellIssue> issues) {
        FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
        for (int s = 0; s < workbook.getNumberOfSheets(); s++) {
            Sheet sheet = workbook.getSheetAt(s);
            for (Row row : sheet) {
                for (Cell cell : row) {
                    if (cell.getCellType() != CellType.FORMULA) {
                        continue;
                    }
                    String refString = new CellReference(cell.getRowIndex(), cell.getColumnIndex())
                            .formatAsString();
                    try {
                        CellType resultType = evaluator.evaluateFormulaCell(cell);
                        if (resultType == CellType.ERROR) {
                            String error = FormulaError.forInt(cell.getErrorCellValue()).getString();
                            issues.add(new CellIssue(sheet.getSheetName(), refString,
                                    "formula evaluates to " + error));
                        }
                    } catch (NotImplementedException e) {
                        issues.add(new CellIssue(sheet.getSheetName(), refString,
                                "formula uses a function the verifier does not support - prefer "
                                        + "SUM/IF/VLOOKUP/INDEX/MATCH-era functions"));
                    } catch (RuntimeException e) {
                        issues.add(new CellIssue(sheet.getSheetName(), refString,
                                "formula could not be evaluated: " + firstLine(e.getMessage())));
                    }
                }
            }
        }
    }

    private Cell getOrCreateCell(Sheet sheet, int rowIndex, int columnIndex) {
        Row row = sheet.getRow(rowIndex);
        if (row == null) {
            row = sheet.createRow(rowIndex);
        }
        Cell cell = row.getCell(columnIndex);
        if (cell == null) {
            cell = row.createCell(columnIndex);
        }
        return cell;
    }

    private String safeSheetName(@Nullable String name, int index) {
        String candidate = name == null || name.isBlank() ? "Sheet" + (index + 1) : name.trim();
        return WorkbookUtil.createSafeSheetName(candidate);
    }

    private byte[] toBytes(Workbook workbook) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        return out.toByteArray();
    }

    private String firstLine(@Nullable String message) {
        if (message == null || message.isBlank()) {
            return "no details";
        }
        int newline = message.indexOf('\n');
        String line = newline > 0 ? message.substring(0, newline) : message;
        return line.length() > 120 ? line.substring(0, 120) + "..." : line;
    }
}
