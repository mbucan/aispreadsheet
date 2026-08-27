package com.company.aispreadsheet.security;

import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

/**
 * Grants access to the Vaadin Spreadsheet demo views. The demo views work on
 * in-memory workbooks only, so no entity policies are required.
 */
@ResourceRole(name = "Vaadin Spreadsheet demo", code = VaadinSpreadsheetDemoRole.CODE)
public interface VaadinSpreadsheetDemoRole {

    String CODE = "vaadin-spreadsheet-demo";

    @ViewPolicy(viewIds = {
            "SpreadsheetSimpleInvoiceView",
            "SpreadsheetFormulasView",
            "SpreadsheetGroupingView",
            "SpreadsheetNamedRangesChartView",
            "SpreadsheetEmbeddedChartsView",
            "SpreadsheetBasicStylingView",
            "SpreadsheetChartView",
            "SpreadsheetComponentsView",
            "SpreadsheetFileUploadView",
            "SpreadsheetReportModeView"
    })
    @MenuPolicy(menuIds = {
            "SpreadsheetSimpleInvoiceView",
            "SpreadsheetFormulasView",
            "SpreadsheetGroupingView",
            "SpreadsheetNamedRangesChartView",
            "SpreadsheetEmbeddedChartsView",
            "SpreadsheetBasicStylingView",
            "SpreadsheetChartView",
            "SpreadsheetComponentsView",
            "SpreadsheetFileUploadView",
            "SpreadsheetReportModeView"
    })
    void spreadsheetDemoScreens();
}
