package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.component.spreadsheet.SpreadsheetComponentFactory;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.component.checkbox.JmixCheckbox;
import io.jmix.flowui.component.combobox.JmixComboBox;
import io.jmix.flowui.component.datepicker.TypedDatePicker;
import io.jmix.flowui.component.select.JmixSelect;
import io.jmix.core.metamodel.datatype.DatatypeRegistry;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.MessageBundle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Port of the original demo's {@code TestComponentFactory}: provides custom editors for the
 * typed cells of rows 2-4 and persistent custom components on rows 6-7 of the generated
 * "Custom Components" workbook.
 */
public class DemoComponentFactory implements SpreadsheetComponentFactory {

    private final Spreadsheet spreadsheet;
    private final UiComponents uiComponents;
    private final Notifications notifications;
    private final MessageBundle messageBundle;
    private final DatatypeRegistry datatypeRegistry;

    private final String[] comboBoxValues = {"Value 1", "Value 2", "Value 3"};

    private final Object[][] data = {
            {"Testing custom editors", "Boolean", "Date", "Numeric", "Button", "ComboBox"},
            {"nulls:", false, null, 0, null, null},
            {"", true, new Date(), 5, "here is a button", "Value 1"},
            {"", true, Calendar.getInstance(), 500.0D, "here is another button", "Value 2"}};

    private final Workbook testWorkbook;
    private final JmixCheckbox checkBox;
    private final TypedDatePicker<LocalDate> dateField;
    private final JmixComboBox<String> comboBox;

    private JmixButton clickMeButton;
    private JmixButton hideRowsButton;
    private JmixButton hideColumnsButton;
    private JmixButton lockSheetButton;
    private JmixButton hideAllButton;
    private JmixSelect<String> select;
    private JmixComboBox<String> comboBox2;

    private int counter = 0;
    private boolean initializingComboBoxValue;
    private boolean hidden = false;

    public DemoComponentFactory(Spreadsheet spreadsheet, UiComponents uiComponents,
                                Notifications notifications, MessageBundle messageBundle,
                                DatatypeRegistry datatypeRegistry) {
        this.spreadsheet = spreadsheet;
        this.uiComponents = uiComponents;
        this.notifications = notifications;
        this.messageBundle = messageBundle;
        this.datatypeRegistry = datatypeRegistry;
        this.testWorkbook = createTestWorkbook();
        this.checkBox = createCheckBoxEditor();
        this.dateField = createDateFieldEditor();
        this.comboBox = createComboBoxEditor();
    }

    public Workbook getTestWorkbook() {
        return testWorkbook;
    }

    private Workbook createTestWorkbook() {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Custom Components");
        Row lastRow = sheet.createRow(100);
        lastRow.createCell(100, CellType.BOOLEAN).setCellValue(true);
        sheet.setColumnWidth(0, 7800);
        sheet.setColumnWidth(1, 3800);
        sheet.setColumnWidth(2, 6100);
        sheet.setColumnWidth(3, 7200);
        sheet.setColumnWidth(4, 5900);
        sheet.setColumnWidth(5, 8200);

        DataFormat format = workbook.createDataFormat();
        for (int i = 0; i < data.length; i++) {
            Row row = sheet.createRow(i);
            row.setHeightInPoints(28F);
            for (int j = 0; j < data[0].length; j++) {
                Object value = data[i][j];
                Cell cell = row.createCell(j);
                if (value instanceof String stringValue) {
                    cell.setCellValue(stringValue);
                } else if (value instanceof Double doubleValue) {
                    cell.setCellValue(doubleValue);
                    CellStyle style = workbook.createCellStyle();
                    style.setDataFormat(format.getFormat("0000.0"));
                    cell.setCellStyle(style);
                } else if (value instanceof Integer intValue) {
                    cell.setCellValue(intValue.intValue());
                    CellStyle style = workbook.createCellStyle();
                    style.setDataFormat(format.getFormat("0.0"));
                    cell.setCellStyle(style);
                } else if (value instanceof Boolean booleanValue) {
                    cell.setCellValue(booleanValue);
                } else if (value instanceof Date dateValue) {
                    cell.setCellValue(dateValue);
                    CellStyle dateStyle = workbook.createCellStyle();
                    dateStyle.setDataFormat(format.getFormat("m/d/yy h:mm"));
                    cell.setCellStyle(dateStyle);
                } else if (value instanceof Calendar calendarValue) {
                    cell.setCellValue(calendarValue);
                    CellStyle dateStyle = workbook.createCellStyle();
                    dateStyle.setDataFormat(format.getFormat("d m yyyy"));
                    cell.setCellStyle(dateStyle);
                }
            }
        }

        Row row5 = sheet.createRow(5);
        row5.setHeightInPoints(28F);
        row5.createCell(0).setCellValue("This cell has a value, and a component (label)");
        row5.createCell(1).setCellValue("This cell has a value, and a button");
        Cell lockedCell = row5.createCell(2);
        lockedCell.setCellValue("This cell has a value and button, and is locked.");
        CellStyle lockedCellStyle = workbook.createCellStyle();
        lockedCellStyle.setLocked(true);
        lockedCell.setCellStyle(lockedCellStyle);

        Row row6 = sheet.createRow(6);
        row6.setHeightInPoints(28F);
        return workbook;
    }

    private JmixCheckbox createCheckBoxEditor() {
        JmixCheckbox field = uiComponents.create(JmixCheckbox.class);
        field.addValueChangeListener(event -> {
            if (!event.isFromClient()) {
                return;
            }
            Cell cell = getSelectedCell();
            if (cell != null && cell.getCellType() == CellType.BOOLEAN
                    && event.getValue() != null
                    && cell.getBooleanCellValue() != event.getValue()) {
                cell.setCellValue(event.getValue());
                spreadsheet.refreshCells(cell);
            }
        });
        return field;
    }

    @SuppressWarnings("unchecked")
    private TypedDatePicker<LocalDate> createDateFieldEditor() {
        TypedDatePicker<LocalDate> field = uiComponents.create(TypedDatePicker.class);
        field.setDatatype(datatypeRegistry.get(LocalDate.class));
        field.addValueChangeListener(event -> {
            if (!event.isFromClient() || event.getValue() == null) {
                return;
            }
            Cell cell = getSelectedCell();
            if (cell == null) {
                return;
            }
            Date oldValue = cell.getDateCellValue();
            Date value = Date.from(event.getValue().atStartOfDay(ZoneId.systemDefault()).toInstant());
            if (oldValue != null && !oldValue.equals(value)) {
                cell.setCellValue(value);
                spreadsheet.refreshCells(cell);
            }
        });
        return field;
    }

    @SuppressWarnings("unchecked")
    private JmixComboBox<String> createComboBoxEditor() {
        JmixComboBox<String> field = uiComponents.create(JmixComboBox.class);
        field.setItems(comboBoxValues);
        field.setWidthFull();
        field.addValueChangeListener(event -> {
            if (initializingComboBoxValue) {
                return;
            }
            Cell cell = getSelectedCell();
            if (cell != null) {
                cell.setCellValue(field.getValue());
                spreadsheet.refreshCells(cell);
            }
        });
        return field;
    }

    @Override
    public Component getCustomEditorForCell(Cell cell, int rowIndex, int columnIndex,
                                            Spreadsheet spreadsheet, Sheet sheet) {
        if (spreadsheet.getActiveSheetIndex() != 0 || rowIndex == 0 || rowIndex > 3) {
            return null;
        }
        return switch (columnIndex) {
            case 1 -> checkBox;
            case 2 -> dateField;
            case 4 -> createEditorButton();
            case 5 -> comboBox;
            default -> null;
        };
    }

    private JmixButton createEditorButton() {
        JmixButton button = uiComponents.create(JmixButton.class);
        button.setText(messageBundle.formatMessage("components.editorButton", ++counter));
        button.addClickListener(event ->
                notifications.create(messageBundle.getMessage("components.buttonInsideSheet")).show());
        return button;
    }

    @Override
    public void onCustomEditorDisplayed(Cell cell, int rowIndex, int columnIndex,
                                        Spreadsheet spreadsheet, Sheet sheet, Component customEditor) {
        if (customEditor instanceof JmixButton button) {
            if (rowIndex == 3) {
                button.setWidth("100%");
            } else {
                button.setWidth("130px");
                button.setText(messageBundle.formatMessage("components.colRow", columnIndex, rowIndex));
            }
            return;
        }
        if (customEditor.equals(comboBox)) {
            initializingComboBoxValue = true;
            comboBox.setValue(cell != null && cell.getCellType() == CellType.STRING
                    ? cell.getStringCellValue()
                    : null);
            initializingComboBoxValue = false;
            return;
        }
        if (cell == null) {
            return;
        }
        if (customEditor.equals(checkBox) && cell.getCellType() == CellType.BOOLEAN) {
            checkBox.setValue(cell.getBooleanCellValue());
        } else if (customEditor.equals(dateField) && cell.getDateCellValue() != null) {
            dateField.setValue(cell.getDateCellValue().toInstant()
                    .atZone(ZoneId.systemDefault()).toLocalDate());
        }
    }

    @Override
    public Component getCustomComponentForCell(Cell cell, final int rowIndex, final int columnIndex,
                                               final Spreadsheet spreadsheet, final Sheet sheet) {
        if (rowIndex == 5) {
            if (!hidden) {
                switch (columnIndex) {
                    case 0:
                        return createRowLabel();
                    case 1:
                        if (clickMeButton == null) {
                            clickMeButton = newButton("components.clickMe");
                            clickMeButton.setWidth("100%");
                            clickMeButton.addClickListener(event -> notifications.create(
                                            messageBundle.formatMessage("components.buttonClicked",
                                                    rowIndex, columnIndex))
                                    .show());
                        }
                        return clickMeButton;
                    case 2:
                        if (hideRowsButton == null) {
                            hideRowsButton = newButton("components.hideRows");
                            hideRowsButton.addClickListener(event -> {
                                boolean rowsHidden = !sheet.getRow(0).getZeroHeight();
                                for (int i = 0; i <= 3; i++) {
                                    spreadsheet.setRowHidden(i, rowsHidden);
                                }
                            });
                        }
                        return hideRowsButton;
                    case 3:
                        if (hideColumnsButton == null) {
                            hideColumnsButton = newButton("components.hideColumns");
                            hideColumnsButton.addClickListener(event -> {
                                boolean columnsHidden = !sheet.isColumnHidden(5);
                                for (int i = 5; i <= 8; i++) {
                                    spreadsheet.setColumnHidden(i, columnsHidden);
                                }
                            });
                        }
                        return hideColumnsButton;
                    case 4:
                        if (lockSheetButton == null) {
                            lockSheetButton = newButton("components.lockSheet");
                            lockSheetButton.addClickListener(event -> {
                                if (spreadsheet.getActiveSheet().getProtect()) {
                                    spreadsheet.setActiveSheetProtected(null);
                                } else {
                                    spreadsheet.setActiveSheetProtected("");
                                }
                            });
                        }
                        return lockSheetButton;
                    default:
                        break;
                }
            }
            if (columnIndex == 5) {
                if (hideAllButton == null) {
                    hideAllButton = newButton("components.hideAll");
                    hideAllButton.addClickListener(event -> {
                        hidden = !hidden;
                        spreadsheet.reloadVisibleCellContents();
                    });
                }
                return hideAllButton;
            }
        } else if (!hidden && rowIndex == 6) {
            if (columnIndex == 1) {
                if (select == null) {
                    select = createSelect();
                }
                return select;
            } else if (columnIndex == 2) {
                if (comboBox2 == null) {
                    comboBox2 = createSecondComboBox();
                }
                return comboBox2;
            }
        }
        return null;
    }

    private Span createRowLabel() {
        Span label = new Span(messageBundle.getMessage("components.rowLabel"));
        label.setWidth("100%");
        label.getStyle()
                .set("text-overflow", "ellipsis")
                .set("overflow", "hidden")
                .set("white-space", "nowrap");
        return label;
    }

    private JmixButton newButton(String messageKey) {
        JmixButton button = uiComponents.create(JmixButton.class);
        button.setText(messageBundle.getMessage(messageKey));
        return button;
    }

    @SuppressWarnings("unchecked")
    private JmixSelect<String> createSelect() {
        JmixSelect<String> field = uiComponents.create(JmixSelect.class);
        field.setItems(List.of("JEE"));
        field.setWidthFull();
        field.setHeight("100%");
        return field;
    }

    @SuppressWarnings("unchecked")
    private JmixComboBox<String> createSecondComboBox() {
        JmixComboBox<String> field = uiComponents.create(JmixComboBox.class);
        field.setItems(comboBoxValues);
        field.setWidthFull();
        return field;
    }

    private Cell getSelectedCell() {
        CellReference reference = spreadsheet.getSelectedCellReference();
        return reference == null ? null : spreadsheet.getCell(reference.getRow(), reference.getCol());
    }
}
