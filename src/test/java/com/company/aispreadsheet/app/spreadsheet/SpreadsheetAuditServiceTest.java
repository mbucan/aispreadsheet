package com.company.aispreadsheet.app.spreadsheet;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Unit test for the deterministic audit checks (audit-xls rules): formula errors, hardcoded
 * literals, pattern inconsistencies, failed Checks-tab validations, structure hints.
 */
class SpreadsheetAuditServiceTest {

    private final SpreadsheetBuilderService builder = new SpreadsheetBuilderService();
    private final SpreadsheetAuditService auditService = new SpreadsheetAuditService();

    @Test
    void flagsFormulaErrorsAsCritical() {
        AuditReport report = auditService.audit(build(sheet("Sheet1",
                cell("A1", "10", null),
                cell("A2", null, "A1/0"))));

        assertThat(report.findings()).anySatisfy(finding -> {
            assertThat(finding.severity()).isEqualTo(AuditSeverity.CRITICAL);
            assertThat(finding.category()).isEqualTo("formula-error");
            assertThat(finding.ref()).isEqualTo("A2");
        });
    }

    @Test
    void flagsHardcodedLiteralsInFormulas() {
        AuditReport report = auditService.audit(build(sheet("Sheet1",
                cell("B5", "100", null),
                cell("B6", null, "B5*1.05"))));

        assertThat(report.findings()).anySatisfy(finding -> {
            assertThat(finding.severity()).isEqualTo(AuditSeverity.WARNING);
            assertThat(finding.category()).isEqualTo("hardcoded-input");
            assertThat(finding.issue()).contains("1.05");
        });
    }

    @Test
    void flagsFormulaBreakingRowPattern() {
        AuditReport report = auditService.audit(build(sheet("Sheet1",
                cell("A1", "1", null),
                cell("B1", "2", null),
                cell("C1", "3", null),
                cell("D1", "4", null),
                cell("A2", null, "A1*2"),
                cell("B2", null, "B1*2"),
                cell("C2", null, "C1*2"),
                cell("D2", null, "A1*3"))));

        assertThat(report.findings()).anySatisfy(finding -> {
            assertThat(finding.category()).isEqualTo("inconsistent-formula");
            assertThat(finding.ref()).isEqualTo("D2");
        });
    }

    @Test
    void flagsFailedChecksTabValidation() {
        AuditReport report = auditService.audit(build(
                sheet("Model", cell("A1", "1", null)),
                sheet("Checks", cell("A1", null, "1=2"))));

        assertThat(report.findings()).anySatisfy(finding -> {
            assertThat(finding.severity()).isEqualTo(AuditSeverity.CRITICAL);
            assertThat(finding.category()).isEqualTo("failed-check");
            assertThat(finding.sheet()).isEqualTo("Checks");
        });
    }

    @Test
    void suggestsChecksTabForMultiSheetModels() {
        AuditReport report = auditService.audit(build(
                sheet("Inputs", cell("A1", "1", null)),
                sheet("Model", cell("A1", null, "Inputs!A1"))));

        assertThat(report.findings()).anySatisfy(finding -> {
            assertThat(finding.severity()).isEqualTo(AuditSeverity.INFO);
            assertThat(finding.category()).isEqualTo("structure");
        });
    }

    @Test
    void cleanWorkbookHasNoCriticalFindings() {
        AuditReport report = auditService.audit(build(sheet("Sheet1",
                cell("A1", "10", null),
                cell("A2", "20", null),
                cell("A3", null, "SUM(A1:A2)"))));

        assertThat(report.findings())
                .noneMatch(finding -> finding.severity() == AuditSeverity.CRITICAL);
        assertThat(report.summary()).startsWith("0 critical");
    }

    private byte[] build(SheetSpec... sheets) {
        SpreadsheetSpec spec = new SpreadsheetSpec();
        spec.setFileName("audit-test.xlsx");
        spec.setSheets(List.of(sheets));
        return builder.buildWorkbook(spec).bytes();
    }

    private static SheetSpec sheet(String name, CellSpec... cells) {
        SheetSpec sheet = new SheetSpec();
        sheet.setName(name);
        sheet.setCells(List.of(cells));
        return sheet;
    }

    private static CellSpec cell(String ref, String value, String formula) {
        CellSpec cell = new CellSpec();
        cell.setRef(ref);
        cell.setValue(value);
        cell.setFormula(formula);
        return cell;
    }
}
