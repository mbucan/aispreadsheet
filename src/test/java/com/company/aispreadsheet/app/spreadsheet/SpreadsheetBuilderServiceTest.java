package com.company.aispreadsheet.app.spreadsheet;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * Unit test for the POI workbook builder: value coercion, styles, formulas, verification
 * issues, updates and the text description. The service is pure, so no Spring context needed.
 */
class SpreadsheetBuilderServiceTest {

    private final SpreadsheetBuilderService service = new SpreadsheetBuilderService();

    @Test
    void buildsWorkbookWithFormulasStylesAndNamedRanges() {
        SpreadsheetSpec spec = spec("model.xlsx",
                sheet("Inputs",
                        cell("A1", "Growth rate", null, "LABEL", null),
                        cell("B1", "0.05", null, "PERCENT_INPUT", null)),
                sheet("Model",
                        cell("A1", "Revenue", null, "LABEL", null),
                        cell("B1", "1000", null, "CURRENCY_INPUT", null),
                        cell("B2", null, "B1*(1+Inputs!$B$1)", null, "$#,##0")));
        spec.setNamedRanges(List.of("GrowthRate=Inputs!$B$1"));

        BuildResult result = service.buildWorkbook(spec);

        assertThat(result.issues()).isEmpty();
        assertThat(result.cellCount()).isEqualTo(5);

        try (XSSFWorkbook workbook = open(result.bytes())) {
            Sheet inputs = workbook.getSheet("Inputs");
            Cell rate = inputs.getRow(0).getCell(1);
            assertThat(rate.getCellType()).isEqualTo(CellType.NUMERIC);
            assertThat(rate.getNumericCellValue()).isEqualTo(0.05);
            assertThat(rate.getCellStyle().getDataFormatString()).isEqualTo("0.0%");
            Font rateFont = workbook.getFontAt(rate.getCellStyle().getFontIndex());
            assertThat(rateFont.getColor()).isEqualTo(IndexedColors.BLUE.getIndex());

            Sheet model = workbook.getSheet("Model");
            Cell formulaCell = model.getRow(1).getCell(1);
            assertThat(formulaCell.getCellType()).isEqualTo(CellType.FORMULA);
            assertThat(formulaCell.getCellFormula()).isEqualTo("B1*(1+Inputs!$B$1)");
            // verification pass cached the evaluated value
            assertThat(formulaCell.getNumericCellValue()).isEqualTo(1050.0);
            // cross-sheet formula without explicit style is colored green
            Font formulaFont = workbook.getFontAt(formulaCell.getCellStyle().getFontIndex());
            assertThat(formulaFont.getColor()).isEqualTo(IndexedColors.GREEN.getIndex());

            assertThat(workbook.getName("GrowthRate")).isNotNull();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Test
    void collectsIssuesButStillReturnsBytes() {
        SpreadsheetSpec spec = spec("bad.xlsx",
                sheet("Sheet1",
                        cell("A1", "10", null, "NO_SUCH_STYLE", null),
                        cell("A2", null, "A1/0", null, null),
                        cell("bad-ref", "1", null, null, null)));

        BuildResult result = service.buildWorkbook(spec);

        assertThat(result.bytes()).isNotEmpty();
        assertThat(result.issues()).anySatisfy(issue ->
                assertThat(issue.problem()).contains("unknown style token"));
        assertThat(result.issues()).anySatisfy(issue ->
                assertThat(issue.problem()).contains("#DIV/0!"));
        assertThat(result.issues()).anySatisfy(issue ->
                assertThat(issue.problem()).contains("invalid cell reference"));
    }

    @Test
    void appliesUpdatesAndClearsCells() {
        BuildResult initial = service.buildWorkbook(spec("wb.xlsx",
                sheet("Sheet1",
                        cell("A1", "1", null, null, null),
                        cell("A2", "2", null, null, null))));

        CellUpdate change = new CellUpdate();
        change.setSheet("Sheet1");
        change.setRef("A1");
        change.setValue("42");
        CellUpdate clear = new CellUpdate();
        clear.setSheet("Sheet1");
        clear.setRef("A2");
        clear.setClear(true);
        CellUpdate newSheetCell = new CellUpdate();
        newSheetCell.setSheet("Extra");
        newSheetCell.setRef("B2");
        newSheetCell.setFormula("=Sheet1!A1*2");

        BuildResult updated = service.applyUpdates(initial.bytes(), List.of(change, clear, newSheetCell));

        assertThat(updated.cellCount()).isEqualTo(3);
        assertThat(updated.issues()).isEmpty();
        try (XSSFWorkbook workbook = open(updated.bytes())) {
            assertThat(workbook.getSheet("Sheet1").getRow(0).getCell(0).getNumericCellValue()).isEqualTo(42.0);
            assertThat(workbook.getSheet("Sheet1").getRow(0).getCell(0).getCellType())
                    .isEqualTo(CellType.NUMERIC);
            // A2 was cleared: either absent or blank
            Cell a2 = workbook.getSheet("Sheet1").getRow(1).getCell(0);
            assertThat(a2 == null || a2.getCellType() == CellType.BLANK).isTrue();
            assertThat(workbook.getSheet("Extra").getRow(1).getCell(1).getCellFormula())
                    .isEqualTo("Sheet1!A1*2");
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    @Test
    void describesWorkbookContent() {
        BuildResult result = service.buildWorkbook(spec("desc.xlsx",
                sheet("Sheet1",
                        cell("A1", "100", null, null, null),
                        cell("A2", null, "SUM(A1:A1)", null, null))));

        String description = service.describeWorkbook(result.bytes());

        assertThat(description).contains("Sheet \"Sheet1\"");
        assertThat(description).contains("A2: =SUM(A1:A1)");
        assertThat(description).contains("100");
    }

    @Test
    void rejectsEmptyAndOversizedSpecs() {
        assertThatThrownBy(() -> service.buildWorkbook(new SpreadsheetSpec()))
                .isInstanceOf(SpreadsheetBuildException.class);

        SpreadsheetSpec tooManySheets = new SpreadsheetSpec();
        tooManySheets.setSheets(java.util.stream.IntStream.rangeClosed(1, 11)
                .mapToObj(i -> sheet("S" + i)).toList());
        assertThatThrownBy(() -> service.buildWorkbook(tooManySheets))
                .isInstanceOf(SpreadsheetBuildException.class)
                .hasMessageContaining("Too many sheets");
    }

    private static SpreadsheetSpec spec(String fileName, SheetSpec... sheets) {
        SpreadsheetSpec spec = new SpreadsheetSpec();
        spec.setFileName(fileName);
        spec.setSheets(List.of(sheets));
        return spec;
    }

    private static SheetSpec sheet(String name, CellSpec... cells) {
        SheetSpec sheet = new SheetSpec();
        sheet.setName(name);
        sheet.setCells(List.of(cells));
        return sheet;
    }

    private static CellSpec cell(String ref, String value, String formula, String style,
                                 String numberFormat) {
        CellSpec cell = new CellSpec();
        cell.setRef(ref);
        cell.setValue(value);
        cell.setFormula(formula);
        cell.setStyle(style);
        cell.setNumberFormat(numberFormat);
        return cell;
    }

    private static XSSFWorkbook open(byte[] bytes) throws IOException {
        return new XSSFWorkbook(new ByteArrayInputStream(bytes));
    }
}
