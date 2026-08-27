package com.company.aispreadsheet.app.spreadsheet;

import org.springframework.context.ApplicationEvent;

import java.util.List;

/**
 * Published (via {@code UiEventPublisher}) after an AI tool has produced or changed a workbook,
 * so open views can refresh their spreadsheet panel.
 */
public class SpreadsheetReadyEvent extends ApplicationEvent {

    private final String fileName;
    private final byte[] bytes;
    private final List<CellIssue> issues;

    public SpreadsheetReadyEvent(Object source, String fileName, byte[] bytes, List<CellIssue> issues) {
        super(source);
        this.fileName = fileName;
        this.bytes = bytes;
        this.issues = List.copyOf(issues);
    }

    public String getFileName() {
        return fileName;
    }

    public byte[] getBytes() {
        return bytes;
    }

    public List<CellIssue> getIssues() {
        return issues;
    }
}
