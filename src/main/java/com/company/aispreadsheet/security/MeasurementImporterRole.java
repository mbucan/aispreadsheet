package com.company.aispreadsheet.security;

import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

/**
 * Everything the viewer can do, plus importing Calypso files: create access to
 * measurement reports/characteristics and the import view. Reports stay
 * immutable after import — no UPDATE/DELETE.
 */
@ResourceRole(name = "Measurement importer", code = MeasurementImporterRole.CODE)
public interface MeasurementImporterRole extends MeasurementViewerRole {

    String CODE = "measurement-importer";

    @EntityAttributePolicy(entityClass = MeasurementReport.class,
            attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = MeasurementReport.class,
            actions = {EntityPolicyAction.READ, EntityPolicyAction.CREATE})
    void measurementReportCreate();

    @EntityAttributePolicy(entityClass = MeasurementCharacteristic.class,
            attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = MeasurementCharacteristic.class,
            actions = {EntityPolicyAction.READ, EntityPolicyAction.CREATE})
    void measurementCharacteristicCreate();

    @ViewPolicy(viewIds = "MeasurementImportView")
    @MenuPolicy(menuIds = "MeasurementImportView")
    void importScreens();
}
