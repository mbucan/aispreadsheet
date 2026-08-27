package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.aitools.dataload.json.EmptyObjectTolerantListDeserializer;
import org.jspecify.annotations.Nullable;
import tools.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

/**
 * Complete workbook specification passed by the AI model to the create-spreadsheet tool.
 */
public class SpreadsheetSpec {

    @Nullable
    protected String fileName;

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<SheetSpec> sheets = List.of();

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<String> namedRanges = List.of();

    @Nullable
    public String getFileName() {
        return fileName;
    }

    public void setFileName(@Nullable String fileName) {
        this.fileName = fileName;
    }

    public List<SheetSpec> getSheets() {
        return sheets;
    }

    public void setSheets(List<SheetSpec> sheets) {
        this.sheets = sheets == null ? List.of() : sheets;
    }

    public List<String> getNamedRanges() {
        return namedRanges;
    }

    public void setNamedRanges(List<String> namedRanges) {
        this.namedRanges = namedRanges == null ? List.of() : namedRanges;
    }
}
