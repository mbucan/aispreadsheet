package com.company.aispreadsheet.view.bladeworkshop.measurementreport;

import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;
import io.jmix.core.FileRef;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.download.Downloader;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.EditedEntityContainer;
import io.jmix.flowui.view.StandardDetailView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.springframework.beans.factory.annotation.Autowired;

@Route(value = "measurement-reports/:id", layout = MainView.class)
@ViewController(id = "MeasurementReport.detail")
@ViewDescriptor(path = "measurement-report-detail-view.xml")
@EditedEntityContainer("measurementReportDc")
public class MeasurementReportDetailView extends StandardDetailView<MeasurementReport> {

    @ViewComponent
    private DataGrid<MeasurementCharacteristic> characteristicsDataGrid;

    @ViewComponent
    private Span discrepancyBadge;

    @ViewComponent
    private JmixButton downloadButton;

    @Autowired
    private Downloader downloader;

    @Subscribe
    public void onInit(final InitEvent event) {
        characteristicsDataGrid.setPartNameGenerator(characteristic ->
                Boolean.TRUE.equals(characteristic.getOutOfTol()) ? "oot-row" : null);
    }

    @Subscribe
    public void onReady(final ReadyEvent event) {
        MeasurementReport report = getEditedEntity();
        discrepancyBadge.setVisible(Boolean.TRUE.equals(report.getTraceabilityDiscrepancy()));
        downloadButton.setEnabled(report.getSourceFile() != null);
    }

    @Subscribe("downloadButton")
    public void onDownloadButtonClick(final ClickEvent<JmixButton> event) {
        FileRef sourceFile = getEditedEntity().getSourceFile();
        if (sourceFile != null) {
            downloader.download(sourceFile);
        }
    }
}
