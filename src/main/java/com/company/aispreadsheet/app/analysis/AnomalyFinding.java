package com.company.aispreadsheet.app.analysis;

import org.jspecify.annotations.Nullable;

import java.math.BigDecimal;

/**
 * One detected anomaly. Fields that do not apply to the anomaly type are {@code null}
 * (e.g. an ELEVATED_OOT_RATE finding has no single part or measurement values).
 *
 * @param spindle        spindle number mark, e.g. "DMU-01"
 * @param characteristic characteristic name, or "-" for spindle-level findings
 * @param type           anomaly kind
 * @param severity       how serious the finding is
 * @param partId         part on which the anomaly was measured, if applicable
 * @param measuredAt     ISO date-time of the affected measurement, if applicable
 * @param actual         measured value
 * @param nominal        nominal value
 * @param tolMinus       lower tolerance (negative for bilateral characteristics)
 * @param tolPlus        upper tolerance
 * @param metric         the number that triggered the finding: tolerance-band usage for
 *                       OUT_OF_TOLERANCE, OOT rate %% for ELEVATED_OOT_RATE, normalized slope
 *                       per day for DRIFT, mean absolute normalized slope per day for
 *                       SPINDLE_DEGRADATION, z-score for STATISTICAL_OUTLIER, Cpk for LOW_CAPABILITY
 * @param description    human-readable explanation
 */
public record AnomalyFinding(String spindle,
                             String characteristic,
                             AnomalyType type,
                             AnomalySeverity severity,
                             @Nullable String partId,
                             @Nullable String measuredAt,
                             @Nullable BigDecimal actual,
                             @Nullable BigDecimal nominal,
                             @Nullable BigDecimal tolMinus,
                             @Nullable BigDecimal tolPlus,
                             @Nullable BigDecimal metric,
                             String description) {
}
