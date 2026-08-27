package com.company.aispreadsheet.security;

import com.company.aispreadsheet.entity.Employee;
import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.entity.Spindle;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

/**
 * Read-only access to the machine-shop master data and measurement reports.
 */
@ResourceRole(name = "Measurement viewer", code = MeasurementViewerRole.CODE)
public interface MeasurementViewerRole {

    String CODE = "measurement-viewer";

    @EntityAttributePolicy(entityClass = Employee.class,
            attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Employee.class,
            actions = EntityPolicyAction.READ)
    void employee();

    @EntityAttributePolicy(entityClass = Spindle.class,
            attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Spindle.class,
            actions = EntityPolicyAction.READ)
    void spindle();

    @EntityAttributePolicy(entityClass = MeasurementReport.class,
            attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = MeasurementReport.class,
            actions = EntityPolicyAction.READ)
    void measurementReport();

    @EntityAttributePolicy(entityClass = MeasurementCharacteristic.class,
            attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = MeasurementCharacteristic.class,
            actions = EntityPolicyAction.READ)
    void measurementCharacteristic();

    @ViewPolicy(viewIds = {
            "Employee.list",
            "Employee.detail",
            "Spindle.list",
            "Spindle.detail",
            "MeasurementReport.list",
            "MeasurementReport.detail"
    })
    @MenuPolicy(menuIds = {
            "Employee.list",
            "Spindle.list",
            "MeasurementReport.list"
    })
    void screens();
}
