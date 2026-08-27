package com.company.aispreadsheet.app.analysis;

import org.jspecify.annotations.Nullable;

import java.math.BigDecimal;
import java.util.List;

/**
 * Complete result of a spindle anomaly analysis, shaped for the AI model to turn into a
 * report spreadsheet (summary sheet from {@code spindles}, findings sheet from {@code findings}).
 *
 * @param success             false when the analysis could not run; {@code note} then carries guidance
 * @param periodFrom          ISO date-time of the earliest analyzed measurement, if any
 * @param periodTo            ISO date-time of the latest analyzed measurement, if any
 * @param spindleCount        spindles covered
 * @param reportCount         measurement reports analyzed
 * @param characteristicCount characteristic rows analyzed
 * @param fleetOutOfTolRatePct out-of-tolerance rate over all analyzed rows, percent
 * @param spindles            per-spindle summaries, worst out-of-tolerance rate first
 * @param findings            individual findings, most severe first (capped; see note)
 * @param note                caps, skipped checks and follow-up guidance for the model
 */
public record SpindleAnomalyAnalysisResult(boolean success,
                                           @Nullable String periodFrom,
                                           @Nullable String periodTo,
                                           int spindleCount,
                                           int reportCount,
                                           int characteristicCount,
                                           @Nullable BigDecimal fleetOutOfTolRatePct,
                                           List<SpindleSummary> spindles,
                                           List<AnomalyFinding> findings,
                                           String note) {

    public static SpindleAnomalyAnalysisResult failure(String note) {
        return new SpindleAnomalyAnalysisResult(false, null, null, 0, 0, 0, null,
                List.of(), List.of(), note);
    }
}
