package com.company.aispreadsheet.entity;

import io.jmix.core.metamodel.datatype.EnumClass;
import org.springframework.lang.Nullable;

public enum EmployeeType implements EnumClass<String> {

    OPERATOR("OPERATOR"),
    INSPECTOR("INSPECTOR");

    private final String id;

    EmployeeType(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return id;
    }

    @Nullable
    public static EmployeeType fromId(String id) {
        for (EmployeeType value : EmployeeType.values()) {
            if (value.getId().equals(id)) {
                return value;
            }
        }
        return null;
    }
}
