package com.company.aispreadsheet.view.bladeworkshop.measurementimport;

import com.company.aispreadsheet.app.CalypsoParseException;
import com.company.aispreadsheet.app.DuplicateReportException;
import com.company.aispreadsheet.app.ImportResult;
import com.company.aispreadsheet.app.MeasurementImportService;
import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.router.Route;
import io.jmix.core.DataManager;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.ViewNavigators;
import io.jmix.flowui.component.textarea.JmixTextArea;
import io.jmix.flowui.component.upload.FileUploadField;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.kit.component.upload.event.FileUploadSucceededEvent;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.ByteArrayInputStream;

@Route(value = "measurement-import", layout = MainView.class)
@ViewController(id = "MeasurementImportView")
@ViewDescriptor(path = "measurement-import-view.xml")
public class MeasurementImportView extends StandardView {

    @ViewComponent
    private FileUploadField fileUploadField;

    @ViewComponent
    private JmixTextArea warningsArea;

    @ViewComponent
    private JmixButton openReportButton;

    @ViewComponent
    private MessageBundle messageBundle;

    @Autowired
    private MeasurementImportService importService;

    @Autowired
    private Notifications notifications;

    @Autowired
    private ViewNavigators viewNavigators;

    @Autowired
    private DataManager dataManager;

    private MeasurementReport lastReport;

    @Subscribe("fileUploadField")
    public void onFileUploadSucceeded(final FileUploadSucceededEvent<FileUploadField, byte[]> event) {
        byte[] content = event.getSource().getValue();
        String fileName = event.getFileName();
        if (content == null || content.length == 0) {
            notifications.create(messageBundle.formatMessage("import.emptyFile", fileName))
                    .withThemeVariant(NotificationVariant.LUMO_ERROR)
                    .show();
            return;
        }
        resetResultDisplay();
        try {
            ImportResult result = importService.importFile(new ByteArrayInputStream(content), fileName);
            lastReport = result.report();
            openReportButton.setEnabled(true);
            showWarnings(result.warnings());
            notifications.create(messageBundle.formatMessage("import.success",
                            fileName,
                            result.report().getCharacteristicsTotal(),
                            result.report().getCharacteristicsOutOfTol(),
                            String.valueOf(result.report().getResult())))
                    .withThemeVariant(NotificationVariant.LUMO_SUCCESS)
                    .withDuration(6000)
                    .show();
        } catch (DuplicateReportException e) {
            lastReport = dataManager.load(MeasurementReport.class)
                    .id(e.getExistingReportId())
                    .one();
            openReportButton.setEnabled(true);
            notifications.create(messageBundle.formatMessage("import.duplicate", e.getMessage()))
                    .withThemeVariant(NotificationVariant.LUMO_CONTRAST)
                    .withDuration(8000)
                    .show();
        } catch (CalypsoParseException e) {
            notifications.create(messageBundle.formatMessage("import.parseError", fileName, e.getMessage()))
                    .withThemeVariant(NotificationVariant.LUMO_ERROR)
                    .withDuration(8000)
                    .show();
        }
    }

    @Subscribe("openReportButton")
    public void onOpenReportButtonClick(final ClickEvent<JmixButton> event) {
        if (lastReport != null) {
            viewNavigators.detailView(this, MeasurementReport.class)
                    .editEntity(lastReport)
                    .navigate();
        }
    }

    private void resetResultDisplay() {
        lastReport = null;
        openReportButton.setEnabled(false);
        warningsArea.setVisible(false);
        warningsArea.clear();
    }

    private void showWarnings(java.util.List<String> warnings) {
        if (!warnings.isEmpty()) {
            warningsArea.setValue(String.join("\n", warnings));
            warningsArea.setVisible(true);
        }
    }
}
