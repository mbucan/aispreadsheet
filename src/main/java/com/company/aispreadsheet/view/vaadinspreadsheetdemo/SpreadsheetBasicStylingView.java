package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.html.Input;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.apache.poi.hssf.util.HSSFColor.HSSFColorPredefined;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFFont;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

@Route(value = "spreadsheet-demo/basic-styling", layout = MainView.class)
@ViewController(id = "SpreadsheetBasicStylingView")
@ViewDescriptor(path = "spreadsheet-basic-styling-view.xml")
public class SpreadsheetBasicStylingView extends StandardView {

    private static final String WHITE = "#ffffff";
    private static final String BLACK = "#000000";

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @ViewComponent
    private HorizontalLayout stylingToolbar;

    @ViewComponent
    private MessageBundle messageBundle;

    private Input backgroundColorInput;
    private Input fontColorInput;

    @Subscribe
    public void onInit(final InitEvent event) {
        initStyleToolbar();
        initSpreadsheet();
    }

    private void initStyleToolbar() {
        backgroundColorInput = createColorInput(this::updateSelectedCellsBackgroundColor);
        fontColorInput = createColorInput(this::updateSelectedCellsFontColor);
        stylingToolbar.add(
                new Span(messageBundle.getMessage("backgroundColor.label")), backgroundColorInput,
                new Span(messageBundle.getMessage("fontColor.label")), fontColorInput);
    }

    private Input createColorInput(Consumer<String> colorHandler) {
        Input input = new Input();
        input.setType("color");
        input.addValueChangeListener(event -> {
            if (event.isFromClient()) {
                colorHandler.accept(event.getValue());
            }
        });
        return input;
    }

    private void initSpreadsheet() {
        Font fontBoldExample = demoSpreadsheet.getWorkbook().createFont();
        fontBoldExample.setBold(true);
        CellStyle fontBoldExampleStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        fontBoldExampleStyle.setFillBackgroundColor(HSSFColorPredefined.YELLOW.getIndex());
        fontBoldExampleStyle.setFont(fontBoldExample);
        Cell fontExampleCell = demoSpreadsheet.createCell(0, 0,
                "Click the 'B' button in the top left corner to toggle bold font on and off.");
        fontExampleCell.setCellStyle(fontBoldExampleStyle);

        CellStyle backgroundColorStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        backgroundColorStyle.setFillBackgroundColor(HSSFColorPredefined.YELLOW.getIndex());
        Cell backgroundExampleCell = demoSpreadsheet.createCell(2, 0,
                "Click the 'Background Color' button to select and change the background color of a cell.");
        backgroundExampleCell.setCellStyle(backgroundColorStyle);

        Font fontColorExample = demoSpreadsheet.getWorkbook().createFont();
        fontColorExample.setColor(HSSFColorPredefined.LIGHT_BLUE.getIndex());
        CellStyle fontColorExampleStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        fontColorExampleStyle.setFillBackgroundColor(HSSFColorPredefined.YELLOW.getIndex());
        fontColorExampleStyle.setFont(fontColorExample);
        Cell fontColorExampleCell = demoSpreadsheet.createCell(4, 0,
                "Click the 'Font Color' button to select and change the font color of a cell.");
        fontColorExampleCell.setCellStyle(fontColorExampleStyle);

        for (int i = 0; i <= 4; i = i + 2) {
            for (int j = 1; j <= 9; j++) {
                Cell cell = demoSpreadsheet.createCell(i, j, "");
                cell.setCellStyle(backgroundColorStyle);
            }
        }

        demoSpreadsheet.refreshCells(fontExampleCell, backgroundExampleCell, fontColorExampleCell);
    }

    @Subscribe("boldButton")
    public void onBoldButtonClick(final ClickEvent<JmixButton> event) {
        List<Cell> cellsToRefresh = new ArrayList<>();
        for (CellReference cellRef : demoSpreadsheet.getSelectedCellReferences()) {
            Cell cell = getOrCreateCell(cellRef);
            CellStyle style = cloneStyle(cell);
            Font font = cloneFont(style);
            font.setBold(!font.getBold());
            style.setFont(font);
            cell.setCellStyle(style);
            cellsToRefresh.add(cell);
        }
        demoSpreadsheet.refreshCells(cellsToRefresh);
    }

    private void updateSelectedCellsBackgroundColor(String hexColor) {
        if (hexColor == null || hexColor.isBlank()) {
            return;
        }
        List<Cell> cellsToRefresh = new ArrayList<>();
        for (CellReference cellRef : demoSpreadsheet.getSelectedCellReferences()) {
            Cell cell = getOrCreateCell(cellRef);
            // this cast can only be done when using .xlsx files
            XSSFCellStyle style = (XSSFCellStyle) cloneStyle(cell);
            style.setFillForegroundColor(new XSSFColor(java.awt.Color.decode(hexColor), null));
            cell.setCellStyle(style);
            cellsToRefresh.add(cell);
        }
        demoSpreadsheet.refreshCells(cellsToRefresh);
    }

    private void updateSelectedCellsFontColor(String hexColor) {
        if (hexColor == null || hexColor.isBlank()) {
            return;
        }
        List<Cell> cellsToRefresh = new ArrayList<>();
        for (CellReference cellRef : demoSpreadsheet.getSelectedCellReferences()) {
            Cell cell = getOrCreateCell(cellRef);
            XSSFCellStyle style = (XSSFCellStyle) cloneStyle(cell);
            XSSFFont font = (XSSFFont) cloneFont(style);
            font.setColor(new XSSFColor(java.awt.Color.decode(hexColor), null));
            style.setFont(font);
            cell.setCellStyle(style);
            cellsToRefresh.add(cell);
        }
        demoSpreadsheet.refreshCells(cellsToRefresh);
    }

    @Subscribe("demoSpreadsheet")
    public void onSelectionChange(final Spreadsheet.SelectionChangeEvent event) {
        backgroundColorInput.setValue(WHITE);
        fontColorInput.setValue(BLACK);

        CellReference selectedCell = event.getSelectedCellReference();
        if (selectedCell == null) {
            return;
        }
        Cell cell = demoSpreadsheet.getCell(selectedCell.getRow(), selectedCell.getCol());
        if (cell == null || !(cell.getCellStyle() instanceof XSSFCellStyle style)) {
            return;
        }
        XSSFFont font = style.getFont();
        if (font != null && font.getXSSFColor() != null) {
            String hex = toHex(font.getXSSFColor());
            if (hex != null) {
                fontColorInput.setValue(hex);
            }
        }
        XSSFColor foregroundColor = style.getFillForegroundColorColor();
        if (foregroundColor != null) {
            String hex = toHex(foregroundColor);
            if (hex != null) {
                backgroundColorInput.setValue(hex);
            }
        }
    }

    private Cell getOrCreateCell(CellReference cellRef) {
        Cell cell = demoSpreadsheet.getCell(cellRef.getRow(), cellRef.getCol());
        if (cell == null) {
            cell = demoSpreadsheet.createCell(cellRef.getRow(), cellRef.getCol(), "");
        }
        return cell;
    }

    private CellStyle cloneStyle(Cell cell) {
        CellStyle newStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        newStyle.cloneStyleFrom(cell.getCellStyle());
        return newStyle;
    }

    private Font cloneFont(CellStyle cellStyle) {
        Font newFont = demoSpreadsheet.getWorkbook().createFont();
        Font originalFont = demoSpreadsheet.getWorkbook().getFontAt(cellStyle.getFontIndex());
        if (originalFont != null) {
            newFont.setBold(originalFont.getBold());
            newFont.setItalic(originalFont.getItalic());
            newFont.setFontHeight(originalFont.getFontHeight());
            newFont.setUnderline(originalFont.getUnderline());
            newFont.setStrikeout(originalFont.getStrikeout());
            // this cast can only be done when using .xlsx files
            ((XSSFFont) newFont).setColor(((XSSFFont) originalFont).getXSSFColor());
        }
        return newFont;
    }

    private String toHex(XSSFColor color) {
        byte[] argb = color.getARGB();
        if (argb == null) {
            return null;
        }
        return String.format("#%02x%02x%02x", argb[1] & 0xFF, argb[2] & 0xFF, argb[3] & 0xFF);
    }
}
