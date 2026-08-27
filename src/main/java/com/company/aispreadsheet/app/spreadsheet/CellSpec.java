package com.company.aispreadsheet.app.spreadsheet;

import org.jspecify.annotations.Nullable;

/**
 * One cell of a sheet in a {@link SpreadsheetSpec}. Mutable POJO because Spring AI binds
 * tool-call arguments leniently; the builder service tolerates any null field.
 */
public class CellSpec {

    protected String ref;
    @Nullable
    protected String value;
    @Nullable
    protected String formula;
    @Nullable
    protected String style;
    @Nullable
    protected String numberFormat;

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
}
