package com.company.aispreadsheet.app.spreadsheet;

import com.company.aispreadsheet.test_support.AuthenticatedAsAdmin;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Integration test for the spreadsheet AI tools: store state, guiding failures on malformed
 * arguments, and the read/audit tools. A {@code null} ToolContext is a supported no-op for
 * the status publisher, so the tools are called directly.
 */
@SpringBootTest
@ExtendWith(AuthenticatedAsAdmin.class)
@ActiveProfiles("test")
class AiSpreadsheetToolsTest {

    @Autowired
    AiSpreadsheetTools tools;

    @Autowired
    AiWorkbookStore workbookStore;

    @AfterEach
    void cleanup() {
        workbookStore.clear("admin");
    }

    @Test
    void createStoresWorkbookAndReportsIssues() {
        SpreadsheetToolResult result = tools.createSpreadsheet(spec(), null);

        assertThat(result.success()).isTrue();
        assertThat(result.fileName()).isEqualTo("test.xlsx");
        assertThat(result.cellCount()).isEqualTo(3);
        assertThat(result.formulaIssues()).isEmpty();

        AiWorkbookStore.WorkbookState state = workbookStore.get("admin");
        assertThat(state).isNotNull();
        assertThat(state.bytes()).isNotEmpty();
        assertThat(state.fileName()).isEqualTo("test.xlsx");
    }

    @Test
    void nullOrEmptySpecReturnsGuidingFailure() {
        SpreadsheetToolResult nullResult = tools.createSpreadsheet(null, null);
        assertThat(nullResult.success()).isFalse();
        assertThat(nullResult.message()).contains("spec");

        SpreadsheetToolResult emptyResult = tools.createSpreadsheet(new SpreadsheetSpec(), null);
        assertThat(emptyResult.success()).isFalse();
    }

    @Test
    void updateWithoutWorkbookReturnsGuidingFailure() {
        CellUpdateRequest request = new CellUpdateRequest();
        CellUpdate update = new CellUpdate();
        update.setSheet("Sheet1");
        update.setRef("A1");
        update.setValue("1");
        request.setUpdates(List.of(update));

        SpreadsheetToolResult result = tools.updateSpreadsheetCells(request, null);

        assertThat(result.success()).isFalse();
        assertThat(result.message()).contains(AiSpreadsheetTools.CREATE_TOOL);
    }

    @Test
    void updateChangesStoredWorkbook() {
        tools.createSpreadsheet(spec(), null);

        CellUpdateRequest request = new CellUpdateRequest();
        CellUpdate update = new CellUpdate();
        update.setSheet("Sheet1");
        update.setRef("B1");
        update.setValue("99");
        request.setUpdates(List.of(update));

        SpreadsheetToolResult result = tools.updateSpreadsheetCells(request, null);

        assertThat(result.success()).isTrue();
        assertThat(result.cellCount()).isEqualTo(1);
        assertThat(tools.readSpreadsheet(null)).contains("99");
    }

    @Test
    void readAndAuditWithoutWorkbookGuideTheModel() {
        assertThat(tools.readSpreadsheet(null)).contains(AiSpreadsheetTools.CREATE_TOOL);

        AuditReport report = tools.auditSpreadsheet(null);
        assertThat(report.findings()).isEmpty();
        assertThat(report.summary()).contains(AiSpreadsheetTools.CREATE_TOOL);
    }

    @Test
    void auditReportsOnCurrentWorkbook() {
        tools.createSpreadsheet(spec(), null);

        AuditReport report = tools.auditSpreadsheet(null);

        assertThat(report.summary()).isNotBlank();
        assertThat(report.findings())
                .noneMatch(finding -> finding.severity() == AuditSeverity.CRITICAL);
    }

    private SpreadsheetSpec spec() {
        CellSpec a1 = new CellSpec();
        a1.setRef("A1");
        a1.setValue("10");
        CellSpec a2 = new CellSpec();
        a2.setRef("A2");
        a2.setValue("20");
        CellSpec a3 = new CellSpec();
        a3.setRef("A3");
        a3.setFormula("SUM(A1:A2)");

        SheetSpec sheet = new SheetSpec();
        sheet.setName("Sheet1");
        sheet.setCells(List.of(a1, a2, a3));

        SpreadsheetSpec spec = new SpreadsheetSpec();
        spec.setFileName("test");
        spec.setSheets(List.of(sheet));
        return spec;
    }
}
