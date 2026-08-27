package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.component.upload.FileUploadField;
import io.jmix.flowui.kit.component.upload.event.FileUploadSucceededEvent;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.apache.poi.hssf.util.HSSFColor.HSSFColorPredefined;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@Route(value = "spreadsheet-demo/file-upload", layout = MainView.class)
@ViewController(id = "SpreadsheetFileUploadView")
@ViewDescriptor(path = "spreadsheet-file-upload-view.xml")
public class SpreadsheetFileUploadView extends StandardView {

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @ViewComponent
    private MessageBundle messageBundle;

    @Autowired
    private Notifications notifications;

    @Subscribe
    public void onInit(final InitEvent event) {
        CellStyle backgroundColorStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        backgroundColorStyle.setFillBackgroundColor(HSSFColorPredefined.YELLOW.getIndex());
        Cell cell = demoSpreadsheet.createCell(0, 0,
                "Click the upload button to choose and upload an excel file.");
        cell.setCellStyle(backgroundColorStyle);
        for (int i = 1; i <= 5; i++) {
            Cell bannerCell = demoSpreadsheet.createCell(0, i, "");
            bannerCell.setCellStyle(backgroundColorStyle);
        }
        demoSpreadsheet.refreshCells(cell);
    }

    @Subscribe("uploadField")
    public void onUploadFieldFileUploadSucceeded(final FileUploadSucceededEvent<FileUploadField, byte[]> event) {
        byte[] content = event.getSource().getValue();
        if (content == null || content.length == 0) {
            return;
        }
        try {
            demoSpreadsheet.read(new ByteArrayInputStream(content));
        } catch (IOException e) {
            notifications.create(messageBundle.getMessage("upload.invalidFile"))
                    .withThemeVariant(NotificationVariant.LUMO_ERROR)
                    .show();
        }
    }
}
