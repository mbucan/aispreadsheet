package com.company.aispreadsheet.app.spreadsheet;

import org.jspecify.annotations.Nullable;

import java.util.List;

/**
 * Structured result the spreadsheet tools return to the AI model. {@code formulaIssues}
 * non-empty means the model must fix the listed cells and re-verify.
 */
public record SpreadsheetToolResult(boolean success, @Nullable String fileName, int cellCount,
                                    List<String> formulaIssues, String message) {

    public static SpreadsheetToolResult success(String fileName, int cellCount,
                                                List<CellIssue> issues, String message) {
        return new SpreadsheetToolResult(true, fileName, cellCount,
                issues.stream().map(CellIssue::toString).toList(), message);
    }

    public static SpreadsheetToolResult failure(String message) {
        return new SpreadsheetToolResult(false, null, 0, List.of(), message);
    }
}
