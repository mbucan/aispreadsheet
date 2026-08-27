package com.company.aispreadsheet.app;

import org.jspecify.annotations.Nullable;
import org.springframework.context.ApplicationEvent;

/**
 * Published (via {@code UiEventPublisher}, broadcast to all users) while the startup seeder
 * runs, so open views can show a progress indicator with the item currently being created.
 */
public class SeedDataProgressEvent extends ApplicationEvent {

    /** What the seeder is currently creating. */
    public enum Stage {
        SPINDLES,
        EMPLOYEES,
        REPORTS
    }

    private final Stage stage;
    private final int current;
    private final int total;
    @Nullable
    private final String item;

    public SeedDataProgressEvent(Object source, Stage stage, int current, int total, @Nullable String item) {
        super(source);
        this.stage = stage;
        this.current = current;
        this.total = total;
        this.item = item;
    }

    public Stage getStage() {
        return stage;
    }

    public int getCurrent() {
        return current;
    }

    /** Total item count of the current stage; {@code 0} means the stage has no measurable size. */
    public int getTotal() {
        return total;
    }

    /** Human-readable identification of the item being created, e.g. "BLD-114-5045 on DMU-05". */
    @Nullable
    public String getItem() {
        return item;
    }
}