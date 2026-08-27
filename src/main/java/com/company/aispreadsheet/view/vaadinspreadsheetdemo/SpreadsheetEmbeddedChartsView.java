package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

/**
 * Shows the workbook of the original "Embedded Charts" demo. The charts embedded in the
 * xlsx file are rendered by the spreadsheet component itself, anchored inside the sheet
 * ({@code chartsEnabled} in the descriptor).
 */
@Route(value = "spreadsheet-demo/embedded-charts", layout = MainView.class)
@ViewController(id = "SpreadsheetEmbeddedChartsView")
@ViewDescriptor(path = "spreadsheet-embedded-charts-view.xml")
public class SpreadsheetEmbeddedChartsView extends StandardView {

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @Subscribe
    public void onInit(final InitEvent event) {
        TestSheets.read(demoSpreadsheet, "Embedded Charts.xlsx");
    }
}
