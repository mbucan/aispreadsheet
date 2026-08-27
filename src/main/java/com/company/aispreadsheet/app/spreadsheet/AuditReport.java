package com.company.aispreadsheet.app.spreadsheet;

import java.util.List;

/**
 * Result of a workbook audit: an executive one-line summary plus the individual findings.
 */
public record AuditReport(String summary, List<AuditFinding> findings) {
}
