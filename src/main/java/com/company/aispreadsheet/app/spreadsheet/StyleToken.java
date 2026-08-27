package com.company.aispreadsheet.app.spreadsheet;

import org.jspecify.annotations.Nullable;

/**
 * Predefined cell style vocabulary exposed to the AI model. Encodes the financial-modeling
 * color and number-format conventions adapted from the Apache-2.0 licensed
 * <a href="https://github.com/anthropics/financial-services">anthropics/financial-services</a>
 * {@code xlsx-author} skill: blue font = hardcoded inputs the user may edit, black font =
 * calculated formulas, green font = cross-sheet references.
 */
public enum StyleToken {

    /** Bold 14pt workbook/sheet title. */
    TITLE(true, false, FontTint.BLACK, false, null),
    /** Bold column header with light gray fill. */
    HEADER(true, false, FontTint.BLACK, true, null),
    /** Plain black row label. */
    LABEL(false, false, FontTint.BLACK, false, null),
    /** Blue labeled assumption value (general format). */
    ASSUMPTION(false, false, FontTint.BLUE, false, null),
    /** Blue hardcoded numeric input. */
    INPUT(false, false, FontTint.BLUE, false, "#,##0.00"),
    /** Blue hardcoded currency input. */
    CURRENCY_INPUT(false, false, FontTint.BLUE, false, "$#,##0"),
    /** Blue hardcoded percentage input (value stored as fraction). */
    PERCENT_INPUT(false, false, FontTint.BLUE, false, "0.0%"),
    /** Black calculated formula cell (general format). */
    FORMULA(false, false, FontTint.BLACK, false, null),
    /** Black calculated currency value. */
    CURRENCY(false, false, FontTint.BLACK, false, "$#,##0"),
    /** Black calculated percentage (value stored as fraction). */
    PERCENT(false, false, FontTint.BLACK, false, "0.0%"),
    /** Black valuation multiple, e.g. 8.5x. */
    MULTIPLE(false, false, FontTint.BLACK, false, "0.0x"),
    /** Date value. */
    DATE(false, false, FontTint.BLACK, false, "m/d/yyyy"),
    /** Checks-tab TRUE/FALSE validation cell. */
    CHECK(true, false, FontTint.BLACK, false, null),
    /** Italic gray annotation. */
    NOTE(false, true, FontTint.GRAY, false, null);

    /** Font color groups used by the palette. */
    public enum FontTint {
        BLACK, BLUE, GREEN, GRAY
    }

    private final boolean bold;
    private final boolean italic;
    private final FontTint tint;
    private final boolean grayFill;
    @Nullable
    private final String defaultNumberFormat;

    StyleToken(boolean bold, boolean italic, FontTint tint, boolean grayFill,
               @Nullable String defaultNumberFormat) {
        this.bold = bold;
        this.italic = italic;
        this.tint = tint;
        this.grayFill = grayFill;
        this.defaultNumberFormat = defaultNumberFormat;
    }

    public boolean isBold() {
        return bold;
    }

    public boolean isItalic() {
        return italic;
    }

    public FontTint getTint() {
        return tint;
    }

    public boolean isGrayFill() {
        return grayFill;
    }

    @Nullable
    public String getDefaultNumberFormat() {
        return defaultNumberFormat;
    }

    /**
     * Case-insensitive lookup that returns {@code null} for unknown tokens instead of throwing,
     * so a hallucinated token degrades to a reported issue rather than a failed tool call.
     */
    @Nullable
    public static StyleToken fromString(@Nullable String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        for (StyleToken token : values()) {
            if (token.name().equalsIgnoreCase(value.trim())) {
                return token;
            }
        }
        return null;
    }
}
