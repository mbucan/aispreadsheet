package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.chartsflowui.component.Chart;
import io.jmix.chartsflowui.data.item.MapDataItem;
import io.jmix.chartsflowui.kit.component.model.DataSet;
import io.jmix.chartsflowui.kit.component.model.Title;
import io.jmix.chartsflowui.kit.data.chart.ListChartItems;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.apache.poi.hssf.util.HSSFColor.HSSFColorPredefined;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Route(value = "spreadsheet-demo/chart", layout = MainView.class)
@ViewController(id = "SpreadsheetChartView")
@ViewDescriptor(path = "spreadsheet-chart-view.xml")
public class SpreadsheetChartView extends StandardView {

    private static final int FIRST_DATA_ROW = 3;

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @ViewComponent
    private Chart pieChart;

    @ViewComponent
    private Chart columnChart;

    @Subscribe
    public void onInit(final InitEvent event) {
        initSpreadsheet();
        updateChartsData();
    }

    private void initSpreadsheet() {
        CellStyle backgroundColorStyle = demoSpreadsheet.getWorkbook().createCellStyle();
        backgroundColorStyle.setFillBackgroundColor(HSSFColorPredefined.YELLOW.getIndex());
        Cell cell = demoSpreadsheet.createCell(0, 0,
                "Edit this spreadsheet to alter chart title and data");
        cell.setCellStyle(backgroundColorStyle);
        for (int i = 1; i <= 3; i++) {
            Cell bannerCell = demoSpreadsheet.createCell(0, i, "");
            bannerCell.setCellStyle(backgroundColorStyle);
        }

        demoSpreadsheet.createCell(1, 0, "This is chart title");
        demoSpreadsheet.createCell(2, 0, "Category");
        demoSpreadsheet.createCell(2, 1, "Amount");
        demoSpreadsheet.createCell(3, 0, "Brand 1");
        demoSpreadsheet.createCell(3, 1, 90d);
        demoSpreadsheet.createCell(4, 0, "Brand 2");
        demoSpreadsheet.createCell(4, 1, 7d);
        demoSpreadsheet.createCell(5, 0, "Brand 3");
        demoSpreadsheet.createCell(5, 1, 3d);
        demoSpreadsheet.setColumnWidth(0, 130);

        demoSpreadsheet.refreshCells(cell);
    }

    @Subscribe("demoSpreadsheet")
    public void onCellValueChange(final Spreadsheet.CellValueChangeEvent event) {
        updateChartsData();
    }

    private void updateChartsData() {
        String title = getStringValue(1, 0);
        List<MapDataItem> items = new ArrayList<>();
        int rowIndex = FIRST_DATA_ROW;
        String category;
        while ((category = getStringValue(rowIndex, 0)) != null && !category.isBlank()) {
            items.add(new MapDataItem(
                    Map.of("category", category, "value", getNumericValue(rowIndex, 1))));
            rowIndex++;
        }
        applyChartData(pieChart, title, items);
        applyChartData(columnChart, title, items);
    }

    private void applyChartData(Chart chart, String title, List<MapDataItem> items) {
        chart.setTitle(new Title().withText(title == null ? "" : title));
        chart.setDataSet(new DataSet().withSource(new DataSet.Source<MapDataItem>()
                .withDataProvider(new ListChartItems<>(items))
                .withCategoryField("category")
                .withValueField("value")));
    }

    private String getStringValue(int rowIndex, int columnIndex) {
        Cell cell = demoSpreadsheet.getCell(rowIndex, columnIndex);
        if (cell == null) {
            return null;
        }
        return demoSpreadsheet.getDataFormatter().formatCellValue(cell);
    }

    private Double getNumericValue(int rowIndex, int columnIndex) {
        Cell cell = demoSpreadsheet.getCell(rowIndex, columnIndex);
        if (cell != null && (cell.getCellType() == CellType.NUMERIC
                || (cell.getCellType() == CellType.FORMULA
                        && cell.getCachedFormulaResultType() == CellType.NUMERIC))) {
            return cell.getNumericCellValue();
        }
        return 0d;
    }
}
