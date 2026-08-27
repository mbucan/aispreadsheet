package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.aitools.dataload.json.EmptyObjectTolerantListDeserializer;
import tools.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

/**
 * Batch of cell changes passed by the AI model to the update-spreadsheet tool.
 */
public class CellUpdateRequest {

    @JsonDeserialize(using = EmptyObjectTolerantListDeserializer.class)
    protected List<CellUpdate> updates = List.of();

    public List<CellUpdate> getUpdates() {
        return updates;
    }

    public void setUpdates(List<CellUpdate> updates) {
        this.updates = updates == null ? List.of() : updates;
    }
}
