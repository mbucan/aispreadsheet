package com.company.aispreadsheet.app.spreadsheet;

/**
 * A problem detected while building or evaluating a workbook cell.
 */
public record CellIssue(String sheet, String ref, String problem) {

    @Override
    public String toString() {
        return sheet + "!" + ref + ": " + problem;
    }
}
