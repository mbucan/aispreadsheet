package com.company.aispreadsheet.app.spreadsheet;

/**
 * Severity of an {@link AuditFinding}, mirroring the Critical/Warning/Info levels of the
 * audit-xls skill from anthropics/financial-services (Apache 2.0).
 */
public enum AuditSeverity {
    CRITICAL,
    WARNING,
    INFO
}
