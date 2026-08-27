package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.MeasurementReport;

import java.util.List;

/**
 * Outcome of one file import: the persisted report plus every warning collected
 * by the parser and the traceability resolution.
 */
public record ImportResult(MeasurementReport report, List<String> warnings) {
}
