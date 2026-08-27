package com.company.aispreadsheet.app.analysis;

/**
 * Kind of anomaly detected in spindle measurement data.
 */
public enum AnomalyType {
    /** A characteristic measured outside its tolerance band. */
    OUT_OF_TOLERANCE,
    /** A spindle whose out-of-tolerance rate is well above the fleet average. */
    ELEVATED_OOT_RATE,
    /** A characteristic whose deviation trends toward a tolerance limit over time. */
    DRIFT,
    /**
     * Broad same-direction drift across most of a spindle's characteristics and types —
     * the machine itself is deteriorating and needs maintenance (not tool wear).
     */
    SPINDLE_DEGRADATION,
    /** A single measurement far from its spindle/characteristic history (high z-score). */
    STATISTICAL_OUTLIER,
    /** A spindle/characteristic combination with low process capability (Cpk). */
    LOW_CAPABILITY
}
