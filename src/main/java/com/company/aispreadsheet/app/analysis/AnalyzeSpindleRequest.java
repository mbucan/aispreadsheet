package com.company.aispreadsheet.app.analysis;

import org.jspecify.annotations.Nullable;

/**
 * Argument of the spindle anomaly analysis tool. Mutable POJO so Spring AI's lenient
 * Jackson binding of tool arguments works with partially filled objects.
 */
public class AnalyzeSpindleRequest {

    @Nullable
    protected String spindle;
    @Nullable
    protected String fromDate;
    @Nullable
    protected String toDate;
    @Nullable
    protected Integer maxFindings;

    @Nullable
    public String getSpindle() {
        return spindle;
    }

    public void setSpindle(@Nullable String spindle) {
        this.spindle = spindle;
    }

    @Nullable
    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(@Nullable String fromDate) {
        this.fromDate = fromDate;
    }

    @Nullable
    public String getToDate() {
        return toDate;
    }

    public void setToDate(@Nullable String toDate) {
        this.toDate = toDate;
    }

    @Nullable
    public Integer getMaxFindings() {
        return maxFindings;
    }

    public void setMaxFindings(@Nullable Integer maxFindings) {
        this.maxFindings = maxFindings;
    }
}
