package com.company.aispreadsheet.app;

import java.util.UUID;

/**
 * Thrown when a file with the same dedupe key (partId, measurementDateTime)
 * has already been imported. Carries the id of the existing report so callers
 * can navigate to it.
 */
public class DuplicateReportException extends RuntimeException {

    private final UUID existingReportId;

    public DuplicateReportException(String message, UUID existingReportId) {
        super(message);
        this.existingReportId = existingReportId;
    }

    public UUID getExistingReportId() {
        return existingReportId;
    }
}
