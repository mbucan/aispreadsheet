package com.company.aispreadsheet.app.analysis;

import org.jspecify.annotations.Nullable;

import java.math.BigDecimal;

/**
 * Per-spindle rollup of the analyzed period.
 *
 * @param spindle             spindle number mark
 * @param spindleType         machine type text
 * @param reportCount         measurement reports analyzed
 * @param characteristicCount characteristic rows analyzed
 * @param outOfTolCount       rows out of tolerance
 * @param outOfTolRatePct     out-of-tolerance rate in percent
 * @param minCpk              lowest process capability across characteristics, if computable
 * @param worstCharacteristic characteristic with the lowest Cpk, if computable
 * @param findingCount        findings attributed to this spindle
 * @param degradationSuspected whether machine-level degradation (spindle needs maintenance)
 *                             was detected for this spindle
 */
public record SpindleSummary(String spindle,
                             String spindleType,
                             int reportCount,
                             int characteristicCount,
                             int outOfTolCount,
                             BigDecimal outOfTolRatePct,
                             @Nullable BigDecimal minCpk,
                             @Nullable String worstCharacteristic,
                             int findingCount,
                             boolean degradationSuspected) {
}
