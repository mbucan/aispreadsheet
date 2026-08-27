package com.company.aispreadsheet.entity;

import io.jmix.core.metamodel.datatype.EnumClass;
import org.springframework.lang.Nullable;

public enum ReportResult implements EnumClass<String> {

    PASS("PASS"),
    REWORK_CONCESSION("REWORK / CONCESSION REVIEW"),
    UNKNOWN("UNKNOWN");

    private final String id;

    ReportResult(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return id;
    }

    @Nullable
    public static ReportResult fromId(String id) {
        for (ReportResult value : ReportResult.values()) {
            if (value.getId().equals(id)) {
                return value;
            }
        }
        return null;
    }
}
