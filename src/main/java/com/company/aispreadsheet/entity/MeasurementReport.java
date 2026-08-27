package com.company.aispreadsheet.entity;

import io.jmix.core.DeletePolicy;
import io.jmix.core.FileRef;
import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.OnDelete;
import io.jmix.core.metamodel.annotation.Composition;
import io.jmix.core.metamodel.annotation.DependsOnProperties;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;
import io.jmix.core.metamodel.annotation.PropertyDatatype;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@JmixEntity
@Table(name = "AIS_MEASUREMENT_REPORT", indexes = {
        @Index(name = "IDX_AIS_MEASUREMENT_REPORT_PART_ID", columnList = "PART_ID"),
        @Index(name = "IDX_AIS_MEASUREMENT_REPORT_WORKS_ORDER", columnList = "WORKS_ORDER"),
        @Index(name = "IDX_AIS_MEASUREMENT_REPORT_MACHINE", columnList = "MACHINE_ID"),
        @Index(name = "IDX_AIS_MEASUREMENT_REPORT_MILL_OPERATOR", columnList = "MILL_OPERATOR_ID"),
        @Index(name = "IDX_AIS_MEASUREMENT_REPORT_INSPECTOR", columnList = "INSPECTOR_ID")
}, uniqueConstraints = {
        @UniqueConstraint(name = "UQ_AIS_MEASUREMENT_REPORT_PART_DT",
                columnNames = {"PART_ID", "MEASUREMENT_DATE_TIME"})
})
@Entity
public class MeasurementReport {

    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @Version
    @Column(name = "VERSION", nullable = false)
    private Integer version;

    // Identification / plan block

    @Column(name = "PLAN_NAME")
    private String planName;

    @Column(name = "CALYPSO_VERSION", length = 50)
    private String calypsoVersion;

    @Column(name = "PART_NAME")
    private String partName;

    @Column(name = "DRAWING_NO", length = 100)
    private String drawingNo;

    @NotNull
    @Column(name = "PART_ID", nullable = false, length = 100)
    private String partId;

    @Column(name = "BATCH", length = 100)
    private String batch;

    // Traceability block — claimed values from file + resolved associations

    @Column(name = "WORKS_ORDER", length = 100)
    private String worksOrder;

    @Column(name = "OPERATION", length = 100)
    private String operation;

    @Column(name = "MACHINE_ID_RAW", length = 50)
    private String machineIdRaw;

    @JoinColumn(name = "MACHINE_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Spindle machine;

    @Column(name = "MILL_OPERATOR_RAW", length = 100)
    private String millOperatorRaw;

    @JoinColumn(name = "MILL_OPERATOR_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Employee millOperator;

    @Column(name = "MILL_SHIFT", length = 100)
    private String millShift;

    @Column(name = "INSPECTOR_RAW", length = 100)
    private String inspectorRaw;

    @JoinColumn(name = "INSPECTOR_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Employee inspector;

    @Column(name = "TRACEABILITY_DISCREPANCY")
    private Boolean traceabilityDiscrepancy = false;

    // Measurement conditions block

    @Column(name = "CMM_NAME")
    private String cmmName;

    @Column(name = "MEASUREMENT_DATE_TIME")
    private LocalDateTime measurementDateTime;

    @Column(name = "TEMPERATURE", length = 50)
    private String temperature;

    @Column(name = "PROBE")
    private String probe;

    @Column(name = "SOAK_START")
    private LocalDateTime soakStart;

    @Column(name = "PART_TEMP_AT_START", length = 50)
    private String partTempAtStart;

    @Column(name = "ALIGNMENT", length = 500)
    private String alignment;

    @Column(name = "INPUT_SOURCE", length = 500)
    private String inputSource;

    // Result block

    @Column(name = "CHARACTERISTICS_TOTAL")
    private Integer characteristicsTotal;

    @Column(name = "CHARACTERISTICS_IN_TOL")
    private Integer characteristicsInTol;

    @Column(name = "CHARACTERISTICS_OUT_OF_TOL")
    private Integer characteristicsOutOfTol;

    @Column(name = "RESULT_", length = 50)
    private String result;

    @Column(name = "DISPOSITION_ROUTE", length = 500)
    private String dispositionRoute;

    // Import metadata

    @Column(name = "SOURCE_FILE_NAME", length = 500)
    private String sourceFileName;

    @PropertyDatatype("fileRef")
    @Column(name = "SOURCE_FILE", length = 1024)
    private FileRef sourceFile;

    @Column(name = "IMPORTED_AT")
    private LocalDateTime importedAt;

    @Composition
    @OnDelete(DeletePolicy.CASCADE)
    @OneToMany(mappedBy = "report")
    @OrderBy("sequence")
    private List<MeasurementCharacteristic> characteristics;

    @CreatedBy
    @Column(name = "CREATED_BY")
    private String createdBy;

    @CreatedDate
    @Column(name = "CREATED_DATE")
    private OffsetDateTime createdDate;

    @LastModifiedBy
    @Column(name = "LAST_MODIFIED_BY")
    private String lastModifiedBy;

    @LastModifiedDate
    @Column(name = "LAST_MODIFIED_DATE")
    private OffsetDateTime lastModifiedDate;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getCalypsoVersion() {
        return calypsoVersion;
    }

    public void setCalypsoVersion(String calypsoVersion) {
        this.calypsoVersion = calypsoVersion;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getDrawingNo() {
        return drawingNo;
    }

    public void setDrawingNo(String drawingNo) {
        this.drawingNo = drawingNo;
    }

    public String getPartId() {
        return partId;
    }

    public void setPartId(String partId) {
        this.partId = partId;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public String getWorksOrder() {
        return worksOrder;
    }

    public void setWorksOrder(String worksOrder) {
        this.worksOrder = worksOrder;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public String getMachineIdRaw() {
        return machineIdRaw;
    }

    public void setMachineIdRaw(String machineIdRaw) {
        this.machineIdRaw = machineIdRaw;
    }

    public Spindle getMachine() {
        return machine;
    }

    public void setMachine(Spindle machine) {
        this.machine = machine;
    }

    public String getMillOperatorRaw() {
        return millOperatorRaw;
    }

    public void setMillOperatorRaw(String millOperatorRaw) {
        this.millOperatorRaw = millOperatorRaw;
    }

    public Employee getMillOperator() {
        return millOperator;
    }

    public void setMillOperator(Employee millOperator) {
        this.millOperator = millOperator;
    }

    public String getMillShift() {
        return millShift;
    }

    public void setMillShift(String millShift) {
        this.millShift = millShift;
    }

    public String getInspectorRaw() {
        return inspectorRaw;
    }

    public void setInspectorRaw(String inspectorRaw) {
        this.inspectorRaw = inspectorRaw;
    }

    public Employee getInspector() {
        return inspector;
    }

    public void setInspector(Employee inspector) {
        this.inspector = inspector;
    }

    public Boolean getTraceabilityDiscrepancy() {
        return traceabilityDiscrepancy;
    }

    public void setTraceabilityDiscrepancy(Boolean traceabilityDiscrepancy) {
        this.traceabilityDiscrepancy = traceabilityDiscrepancy;
    }

    public String getCmmName() {
        return cmmName;
    }

    public void setCmmName(String cmmName) {
        this.cmmName = cmmName;
    }

    public LocalDateTime getMeasurementDateTime() {
        return measurementDateTime;
    }

    public void setMeasurementDateTime(LocalDateTime measurementDateTime) {
        this.measurementDateTime = measurementDateTime;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getProbe() {
        return probe;
    }

    public void setProbe(String probe) {
        this.probe = probe;
    }

    public LocalDateTime getSoakStart() {
        return soakStart;
    }

    public void setSoakStart(LocalDateTime soakStart) {
        this.soakStart = soakStart;
    }

    public String getPartTempAtStart() {
        return partTempAtStart;
    }

    public void setPartTempAtStart(String partTempAtStart) {
        this.partTempAtStart = partTempAtStart;
    }

    public String getAlignment() {
        return alignment;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
    }

    public String getInputSource() {
        return inputSource;
    }

    public void setInputSource(String inputSource) {
        this.inputSource = inputSource;
    }

    public Integer getCharacteristicsTotal() {
        return characteristicsTotal;
    }

    public void setCharacteristicsTotal(Integer characteristicsTotal) {
        this.characteristicsTotal = characteristicsTotal;
    }

    public Integer getCharacteristicsInTol() {
        return characteristicsInTol;
    }

    public void setCharacteristicsInTol(Integer characteristicsInTol) {
        this.characteristicsInTol = characteristicsInTol;
    }

    public Integer getCharacteristicsOutOfTol() {
        return characteristicsOutOfTol;
    }

    public void setCharacteristicsOutOfTol(Integer characteristicsOutOfTol) {
        this.characteristicsOutOfTol = characteristicsOutOfTol;
    }

    public ReportResult getResult() {
        return result == null ? null : ReportResult.fromId(result);
    }

    public void setResult(ReportResult result) {
        this.result = result == null ? null : result.getId();
    }

    public String getDispositionRoute() {
        return dispositionRoute;
    }

    public void setDispositionRoute(String dispositionRoute) {
        this.dispositionRoute = dispositionRoute;
    }

    public String getSourceFileName() {
        return sourceFileName;
    }

    public void setSourceFileName(String sourceFileName) {
        this.sourceFileName = sourceFileName;
    }

    public FileRef getSourceFile() {
        return sourceFile;
    }

    public void setSourceFile(FileRef sourceFile) {
        this.sourceFile = sourceFile;
    }

    public LocalDateTime getImportedAt() {
        return importedAt;
    }

    public void setImportedAt(LocalDateTime importedAt) {
        this.importedAt = importedAt;
    }

    public List<MeasurementCharacteristic> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(List<MeasurementCharacteristic> characteristics) {
        this.characteristics = characteristics;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public OffsetDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public OffsetDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    @InstanceName
    @DependsOnProperties({"partId", "measurementDateTime"})
    public String getDisplayName() {
        return (partId != null ? partId : "?") + " @ "
                + (measurementDateTime != null ? measurementDateTime : "?");
    }
}
