package com.company.aispreadsheet.app.spreadsheet;

/**
 * Thrown when a workbook specification cannot be processed at all (empty spec, size guard
 * rails exceeded). The message is safe to return to the AI model as guidance.
 */
public class SpreadsheetBuildException extends RuntimeException {

    public SpreadsheetBuildException(String message) {
        super(message);
    }
}
