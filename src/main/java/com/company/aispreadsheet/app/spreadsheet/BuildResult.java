package com.company.aispreadsheet.app.spreadsheet;

import java.util.List;

/**
 * Outcome of building or updating a workbook: the serialized xlsx bytes, the number of
 * written cells, and the issues found during the formula verification pass.
 */
public record BuildResult(byte[] bytes, int cellCount, List<CellIssue> issues) {
}
