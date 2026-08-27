package com.company.aispreadsheet.app.spreadsheet;

/**
 * One audit finding: where, how severe, what kind of problem, and how to fix it.
 */
public record AuditFinding(String sheet, String ref, AuditSeverity severity,
                           String category, String issue, String suggestion) {
}
