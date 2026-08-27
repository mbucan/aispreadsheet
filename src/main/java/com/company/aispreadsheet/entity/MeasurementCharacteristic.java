package com.company.aispreadsheet.entity;

import io.jmix.core.DeletePolicy;
import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.OnDeleteInverse;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.UUID;

@JmixEntity
@Table(name = "AIS_MEASUREMENT_CHARACTERISTIC", indexes = {
        @Index(name = "IDX_AIS_MEASUREMENT_CHARACTERISTIC_REPORT_SEQ", columnList = "REPORT_ID, SEQ_NUMBER")
})
@Entity
public class MeasurementCharacteristic {

    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @Version
    @Column(name = "VERSION", nullable = false)
    private Integer version;

    // Hard-deleted composition: deleting a report must delete its characteristics.
    // Declared on the model so Studio generates the FK with ON DELETE CASCADE
    // instead of reverting it (as in changelog 2026/07/15-165348 and 16-120600).
    @OnDeleteInverse(DeletePolicy.CASCADE)
    @JoinColumn(name = "REPORT_ID", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private MeasurementReport report;

    @Column(name = "SEQ_NUMBER")
    private Integer sequence;

    @InstanceName
    @NotNull
    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "TYPE_", length = 50)
    private String type;

    @Column(name = "TYPE_RAW", length = 50)
    private String typeRaw;

    @Column(name = "NOMINAL", precision = 19, scale = 4)
    private BigDecimal nominal;

    @Column(name = "ACTUAL", precision = 19, scale = 4)
    private BigDecimal actual;

    @Column(name = "DEVIATION", precision = 19, scale = 4)
    private BigDecimal deviation;

    @Column(name = "TOL_MINUS", precision = 19, scale = 4)
    private BigDecimal tolMinus;

    @Column(name = "TOL_PLUS", precision = 19, scale = 4)
    private BigDecimal tolPlus;

    @Column(name = "OUT_OF_TOL")
    private Boolean outOfTol = false;

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

    public MeasurementReport getReport() {
        return report;
    }

    public void setReport(MeasurementReport report) {
        this.report = report;
    }

    public Integer getSequence() {
        return sequence;
    }

    public void setSequence(Integer sequence) {
        this.sequence = sequence;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CharacteristicType getType() {
        return type == null ? null : CharacteristicType.fromId(type);
    }

    public void setType(CharacteristicType type) {
        this.type = type == null ? null : type.getId();
    }

    public String getTypeRaw() {
        return typeRaw;
    }

    public void setTypeRaw(String typeRaw) {
        this.typeRaw = typeRaw;
    }

    public BigDecimal getNominal() {
        return nominal;
    }

    public void setNominal(BigDecimal nominal) {
        this.nominal = nominal;
    }

    public BigDecimal getActual() {
        return actual;
    }

    public void setActual(BigDecimal actual) {
        this.actual = actual;
    }

    public BigDecimal getDeviation() {
        return deviation;
    }

    public void setDeviation(BigDecimal deviation) {
        this.deviation = deviation;
    }

    public BigDecimal getTolMinus() {
        return tolMinus;
    }

    public void setTolMinus(BigDecimal tolMinus) {
        this.tolMinus = tolMinus;
    }

    public BigDecimal getTolPlus() {
        return tolPlus;
    }

    public void setTolPlus(BigDecimal tolPlus) {
        this.tolPlus = tolPlus;
    }

    public Boolean getOutOfTol() {
        return outOfTol;
    }

    public void setOutOfTol(Boolean outOfTol) {
        this.outOfTol = outOfTol;
    }
}
