package com.company.aispreadsheet.view.bladeworkshop.measurementreport;

import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.entity.ReportResult;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.LookupComponent;
import io.jmix.flowui.view.StandardListView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "measurement-reports", layout = MainView.class)
@ViewController(id = "MeasurementReport.list")
@ViewDescriptor(path = "measurement-report-list-view.xml")
@LookupComponent("reportsDataGrid")
@DialogMode(width = "80em")
public class MeasurementReportListView extends StandardListView<MeasurementReport> {

    @ViewComponent
    private DataGrid<MeasurementReport> reportsDataGrid;

    @Subscribe
    public void onInit(final InitEvent event) {
        reportsDataGrid.setPartNameGenerator(report ->
                report.getResult() != ReportResult.PASS ? "attention-row" : null);
    }
}
