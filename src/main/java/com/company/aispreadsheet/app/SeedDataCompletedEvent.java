package com.company.aispreadsheet.app;

import org.springframework.context.ApplicationEvent;

/**
 * Published (via {@code UiEventPublisher}, broadcast to all users) when the startup seeder
 * has finished inserting the demo measurement reports.
 */
public class SeedDataCompletedEvent extends ApplicationEvent {

    private final int reportCount;

    public SeedDataCompletedEvent(Object source, int reportCount) {
        super(source);
        this.reportCount = reportCount;
    }

    public int getReportCount() {
        return reportCount;
    }
}
