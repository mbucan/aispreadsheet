package com.company.aispreadsheet.app.spreadsheet;

import org.jspecify.annotations.Nullable;

/**
 * One targeted cell change applied to the user's current workbook.
 */
public class CellUpdate {

    protected String sheet;
    protected String ref;
    @Nullable
    protected String value;
    @Nullable
    protected String formula;
    @Nullable
    protected String style;
    @Nullable
    protected String numberFormat;
    @Nullable
    protected Boolean clear;

    public String getSheet() {
        return sheet;
    }

    public void setSheet(String sheet) {
        this.sheet = sheet;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    @Nullable
    public String getValue() {
        return value;
    }

    public void setValue(@Nullable String value) {
        this.value = value;
    }

    @Nullable
    public String getFormula() {
        return formula;
    }

    public void setFormula(@Nullable String formula) {
        this.formula = formula;
    }

    @Nullable
    public String getStyle() {
        return style;
    }

    public void setStyle(@Nullable String style) {
        this.style = style;
    }

    @Nullable
    public String getNumberFormat() {
        return numberFormat;
    }

    public void setNumberFormat(@Nullable String numberFormat) {
        this.numberFormat = numberFormat;
    }

    @Nullable
    public Boolean getClear() {
        return clear;
    }

    public void setClear(@Nullable Boolean clear) {
        this.clear = clear;
    }
}
