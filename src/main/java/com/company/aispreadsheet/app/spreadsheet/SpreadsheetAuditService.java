package com.company.aispreadsheet.app.spreadsheet;

import org.apache.poi.ss.formula.eval.NotImplementedException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Deterministic workbook audit implementing the checks of the {@code audit-xls} skill from the
 * Apache-2.0 licensed <a href="https://github.com/anthropics/financial-services">
 * anthropics/financial-services</a> repository: formula error values, hardcoded numeric literals
 * inside formulas, formula-pattern inconsistencies across rows and columns, failed Checks-tab
 * validations, and input/formula separation problems.
 * <p>
 * Pure computation over xlsx bytes; findings are reported, nothing is modified.
 */
@Service
public class SpreadsheetAuditService {

    static final int MAX_FINDINGS = 100;
    private static final int MIN_RUN_LENGTH = 3;

    private static final Pattern QUOTED_STRING = Pattern.compile("\"[^\"]*\"");
    private static final Pattern QUOTED_SHEET = Pattern.compile("'[^']*'");
    private static final Pattern IDENTIFIER = Pattern.compile("\\$?[A-Za-z_][\\w.$]*");
    private static final Pattern NUMBER_LITERAL = Pattern.compile("\\d+(?:\\.\\d+)?");
    private static final Pattern CELL_REF = Pattern.compile("(\\$?)([A-Za-z]{1,3})(\\$?)(\\d+)");

    /**
     * Audits the workbook and returns a report with a one-line summary and per-cell findings
     * (capped at {@value #MAX_FINDINGS}).
     */
    public AuditReport audit(byte[] xlsx) {
        List<AuditFinding> findings = new ArrayList<>();
        try (XSSFWorkbook workbook = new XSSFWorkbook(new ByteArrayInputStream(xlsx))) {
            FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
            for (int s = 0; s < workbook.getNumberOfSheets(); s++) {
                Sheet sheet = workbook.getSheetAt(s);
                boolean checksSheet = isChecksSheet(sheet);
                auditCells(sheet, evaluator, checksSheet, findings);
                auditFormulaConsistency(sheet, findings);
            }
            auditStructure(workbook, findings);
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to read the workbook", e);
        }
        List<AuditFinding> capped = findings.size() > MAX_FINDINGS
                ? new ArrayList<>(findings.subList(0, MAX_FINDINGS))
                : findings;
        return new AuditReport(buildSummary(findings, capped.size()), capped);
    }

    private void auditCells(Sheet sheet, FormulaEvaluator evaluator, boolean checksSheet,
                            List<AuditFinding> findings) {
        Workbook workbook = sheet.getWorkbook();
        for (Row row : sheet) {
            for (Cell cell : row) {
                if (cell.getCellType() != CellType.FORMULA) {
                    continue;
                }
                String ref = refString(cell);
                String formula = cell.getCellFormula();

                CellType resultType = null;
                try {
                    resultType = evaluator.evaluateFormulaCell(cell);
                    if (resultType == CellType.ERROR) {
                        String error = FormulaError.forInt(cell.getErrorCellValue()).getString();
                        findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.CRITICAL,
                                "formula-error", "formula evaluates to " + error,
                                "Fix the reference or guard the calculation (e.g. IFERROR, non-zero divisor)."));
                    }
                } catch (NotImplementedException e) {
                    findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.WARNING,
                            "unsupported-function",
                            "formula uses a function the verifier cannot evaluate",
                            "Prefer SUM/IF/VLOOKUP/INDEX/MATCH-era functions so results can be verified."));
                } catch (RuntimeException e) {
                    findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.CRITICAL,
                            "formula-error", "formula could not be evaluated (possibly a circular reference)",
                            "Remove the circular dependency between cells."));
                }

                for (String literal : hardcodedLiterals(formula)) {
                    findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.WARNING,
                            "hardcoded-input",
                            "formula contains the hardcoded number " + literal,
                            "Move the constant to a labeled blue input cell (Inputs tab) and reference it."));
                }

                if (isBlueFont(workbook, cell)) {
                    findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.INFO,
                            "input-separation", "calculated cell is styled as a blue input",
                            "Use a black calculation style (FORMULA/CURRENCY/PERCENT) for formula cells."));
                }

                if (checksSheet && resultType == CellType.BOOLEAN && !cell.getBooleanCellValue()) {
                    findings.add(new AuditFinding(sheet.getSheetName(), ref, AuditSeverity.CRITICAL,
                            "failed-check", "Checks-tab validation evaluates to FALSE",
                            "The relationship this check validates is broken - find and fix the source cells."));
                }
            }
        }
    }

    /**
     * Flags cells that break the formula pattern of a contiguous horizontal or vertical run of
     * at least {@value #MIN_RUN_LENGTH} formula cells (formulas compared in relative form).
     */
    private void auditFormulaConsistency(Sheet sheet, List<AuditFinding> findings) {
        Map<Integer, Map<Integer, Cell>> grid = new HashMap<>();
        int maxColumn = 0;
        for (Row row : sheet) {
            for (Cell cell : row) {
                if (cell.getCellType() == CellType.FORMULA) {
                    grid.computeIfAbsent(cell.getRowIndex(), r -> new HashMap<>())
                            .put(cell.getColumnIndex(), cell);
                    maxColumn = Math.max(maxColumn, cell.getColumnIndex());
                }
            }
        }
        for (Map.Entry<Integer, Map<Integer, Cell>> rowEntry : grid.entrySet()) {
            checkRuns(sheet, collectRun(rowEntry.getValue()), findings);
        }
        Map<Integer, Map<Integer, Cell>> byColumn = new HashMap<>();
        grid.values().forEach(cells -> cells.values().forEach(cell ->
                byColumn.computeIfAbsent(cell.getColumnIndex(), c -> new HashMap<>())
                        .put(cell.getRowIndex(), cell)));
        for (Map.Entry<Integer, Map<Integer, Cell>> columnEntry : byColumn.entrySet()) {
            checkRuns(sheet, collectRun(columnEntry.getValue()), findings);
        }
    }

    private List<List<Cell>> collectRun(Map<Integer, Cell> line) {
        List<List<Cell>> runs = new ArrayList<>();
        List<Cell> current = new ArrayList<>();
        Integer previous = null;
        for (Integer index : line.keySet().stream().sorted().toList()) {
            if (previous != null && index != previous + 1) {
                runs.add(current);
                current = new ArrayList<>();
            }
            current.add(line.get(index));
            previous = index;
        }
        runs.add(current);
        return runs;
    }

    private void checkRuns(Sheet sheet, List<List<Cell>> runs, List<AuditFinding> findings) {
        for (List<Cell> run : runs) {
            if (run.size() < MIN_RUN_LENGTH) {
                continue;
            }
            Map<String, List<Cell>> byPattern = new HashMap<>();
            for (Cell cell : run) {
                byPattern.computeIfAbsent(normalizeFormula(cell), p -> new ArrayList<>()).add(cell);
            }
            if (byPattern.size() < 2) {
                continue;
            }
            int majoritySize = byPattern.values().stream().mapToInt(List::size).max().orElse(0);
            if (majoritySize < 2) {
                continue; // no dominant pattern - probably intentionally different formulas
            }
            byPattern.values().stream()
                    .filter(cells -> cells.size() < majoritySize)
                    .flatMap(List::stream)
                    .forEach(cell -> findings.add(new AuditFinding(sheet.getSheetName(), refString(cell),
                            AuditSeverity.WARNING, "inconsistent-formula",
                            "formula breaks the pattern of its neighbors in the same row/column",
                            "Check for a copy error or an off-by-one range; align it with the neighboring formulas.")));
        }
    }

    /**
     * Rewrites every cell reference in the formula as an offset relative to the formula's own
     * cell, so structurally identical formulas in a run normalize to the same string.
     */
    private String normalizeFormula(Cell cell) {
        String formula = QUOTED_STRING.matcher(cell.getCellFormula()).replaceAll("\"\"");
        Matcher matcher = CELL_REF.matcher(formula);
        StringBuilder sb = new StringBuilder();
        while (matcher.find()) {
            boolean absoluteColumn = !matcher.group(1).isEmpty();
            boolean absoluteRow = !matcher.group(3).isEmpty();
            int column = CellReference.convertColStringToIndex(matcher.group(2));
            int rowNumber = Integer.parseInt(matcher.group(4));
            String normalized = (absoluteColumn ? "C" + column : "c" + (column - cell.getColumnIndex()))
                    + (absoluteRow ? "R" + rowNumber : "r" + (rowNumber - 1 - cell.getRowIndex()));
            matcher.appendReplacement(sb, Matcher.quoteReplacement("{" + normalized + "}"));
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    /**
     * Extracts numeric literals embedded in the formula, ignoring strings, sheet names,
     * identifiers/cell references, and the conventionally harmless constants 0 and 1.
     */
    private List<String> hardcodedLiterals(String formula) {
        String stripped = QUOTED_STRING.matcher(formula).replaceAll(" ");
        stripped = QUOTED_SHEET.matcher(stripped).replaceAll(" ");
        stripped = IDENTIFIER.matcher(stripped).replaceAll(" ");
        List<String> literals = new ArrayList<>();
        Matcher matcher = NUMBER_LITERAL.matcher(stripped);
        while (matcher.find()) {
            String literal = matcher.group();
            if (!"0".equals(literal) && !"1".equals(literal)) {
                literals.add(literal);
            }
        }
        return literals;
    }

    private void auditStructure(Workbook workbook, List<AuditFinding> findings) {
        if (workbook.getNumberOfSheets() < 2) {
            return;
        }
        boolean hasChecks = false;
        for (int s = 0; s < workbook.getNumberOfSheets(); s++) {
            if (isChecksSheet(workbook.getSheetAt(s))) {
                hasChecks = true;
                break;
            }
        }
        if (!hasChecks) {
            findings.add(new AuditFinding("workbook", "-", AuditSeverity.INFO, "structure",
                    "multi-sheet workbook has no Checks tab",
                    "Add a \"Checks\" sheet with TRUE/FALSE formulas validating key relationships."));
        }
    }

    private boolean isChecksSheet(Sheet sheet) {
        return "checks".equalsIgnoreCase(sheet.getSheetName().trim());
    }

    private boolean isBlueFont(Workbook workbook, Cell cell) {
        try {
            Font font = workbook.getFontAt(cell.getCellStyle().getFontIndex());
            return font.getColor() == IndexedColors.BLUE.getIndex();
        } catch (RuntimeException e) {
            return false;
        }
    }

    private String buildSummary(List<AuditFinding> all, int reported) {
        long critical = all.stream().filter(f -> f.severity() == AuditSeverity.CRITICAL).count();
        long warning = all.stream().filter(f -> f.severity() == AuditSeverity.WARNING).count();
        long info = all.stream().filter(f -> f.severity() == AuditSeverity.INFO).count();
        String summary = critical + " critical, " + warning + " warning, " + info + " info finding(s)";
        if (reported < all.size()) {
            summary += " (first " + reported + " reported)";
        }
        return summary;
    }

    private String refString(Cell cell) {
        return new CellReference(cell.getRowIndex(), cell.getColumnIndex()).formatAsString();
    }
}
