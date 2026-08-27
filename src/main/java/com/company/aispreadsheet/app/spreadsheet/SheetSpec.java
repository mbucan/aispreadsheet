package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.aitools.dataload.json.EmptyObjectTolerantListDeserializer;
import tools.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

/**
 * One sheet of a {@link SpreadsheetSpec}. List fields tolerate an LLM emitting {@code {}}
 * instead of {@code []} (see {@link EmptyObjectTolerantListDeserializer}).
 */
public class SheetSpec {

    protected String name;

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<CellSpec> cells = List.of();

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<String> merges = List.of();

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<String> columnWidths = List.of();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CellSpec> getCells() {
        return cells;
    }

    public void setCells(List<CellSpec> cells) {
        this.cells = cells == null ? List.of() : cells;
    }

    public List<String> getMerges() {
        return merges;
    }

    public void setMerges(List<String> merges) {
        this.merges = merges == null ? List.of() : merges;
    }

    public List<String> getColumnWidths() {
        return columnWidths;
    }

    public void setColumnWidths(List<String> columnWidths) {
        this.columnWidths = columnWidths == null ? List.of() : columnWidths;
    }
}
