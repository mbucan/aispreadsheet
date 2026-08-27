package com.company.aispreadsheet.app.analysis;

import io.jmix.aitools.tool.AiToolStatusPublisher;
import io.jmix.aitools.tool.JmixAiTool;
import io.jmix.core.DataManager;
import io.jmix.core.Messages;
import org.jspecify.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.model.ToolContext;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

/**
 * AI tool that analyzes spindle measurement data for anomalies. The structured result is
 * designed to be turned into a report workbook by the spreadsheet tools
 * ({@code app_createSpreadsheet}) in the AI Spreadsheet view.
 */
@Component("app_SpindleAnalysisTools")
public class SpindleAnalysisTools implements JmixAiTool {

    public static final String ANALYZE_TOOL = "app_analyzeSpindleAnomalies";

    private static final Logger log = LoggerFactory.getLogger(SpindleAnalysisTools.class);

    private static final String ANALYZE_DESCRIPTION = """
            Analyzes spindle (CMM measurement) data for anomalies and returns a structured
            result. Call this whenever the user asks about spindle quality, anomalies,
            out-of-tolerance parts, machine drift, spindle condition or maintenance needs,
            or wants a spindle quality report.

            CHECKS PERFORMED:
            - OUT_OF_TOLERANCE: characteristics measured outside their tolerance band (CRITICAL)
            - ELEVATED_OOT_RATE: spindles whose out-of-tolerance rate is far above the fleet
              average (only when analyzing all spindles)
            - DRIFT: a single characteristic's deviation trending toward a tolerance limit
              over time (localized - the typical cutting-tool wear signal)
            - SPINDLE_DEGRADATION: broad same-direction drift across most characteristics and
              multiple characteristic types of one spindle (e.g. hole diameters growing rather
              than shrinking) - the spindle/machine itself is deteriorating and needs
              maintenance soon; not tool wear. Per-characteristic DRIFT findings of such a
              spindle are consolidated into this one finding.
            - STATISTICAL_OUTLIER: single measurements far from that spindle/characteristic
              history (z-score >= 3) while still in tolerance
            - LOW_CAPABILITY: spindle/characteristic combinations with process capability
              Cpk below 1.0

            THE REQUEST (all fields optional):
            - "spindle": spindle number mark, e.g. "DMU-01"; omit to analyze the whole fleet
            - "fromDate" / "toDate": ISO dates, e.g. "2026-08-18", limiting the period
            - "maxFindings": cap on returned findings (default 50, max 200)

            THE RESULT contains period info, per-spindle summaries ("spindles": report count,
            out-of-tolerance rate, min Cpk, worst characteristic, and a "degradationSuspected"
            flag marking spindles that need maintenance) and individual "findings"
            (spindle, characteristic, type, severity, values, metric, description), plus a
            "note" with caps and guidance. If "success" is false, follow the guidance in "note".

            AFTER ANALYZING, when the user wants a report: build it with app_createSpreadsheet -
            a "Summary" sheet from the spindle summaries (rates and Cpk as values, totals as
            formulas), a "Findings" sheet with one row per finding (columns: spindle,
            characteristic, type, severity, part, measured at, actual, nominal, tolerances,
            metric, description). Cite only numbers from this result - never invent data.""";

    private final SpindleAnomalyAnalysisService analysisService;
    private final DataManager dataManager;
    private final AiToolStatusPublisher toolStatusPublisher;
    private final Messages messages;

    public SpindleAnalysisTools(SpindleAnomalyAnalysisService analysisService,
                                DataManager dataManager,
                                AiToolStatusPublisher toolStatusPublisher,
                                Messages messages) {
        this.analysisService = analysisService;
        this.dataManager = dataManager;
        this.toolStatusPublisher = toolStatusPublisher;
        this.messages = messages;
    }

    @Tool(name = ANALYZE_TOOL, description = ANALYZE_DESCRIPTION)
    public SpindleAnomalyAnalysisResult analyzeSpindleAnomalies(
            @ToolParam(description = "Analysis filters: optional spindle number mark, ISO date range, max findings.")
            @Nullable AnalyzeSpindleRequest request,
            ToolContext toolContext) {
        String startStatus = message("analyzeSpindleAnomalies.startStatus");
        toolStatusPublisher.update(startStatus, toolContext);

        AnalyzeSpindleRequest effective = request == null ? new AnalyzeSpindleRequest() : request;

        String spindle = normalize(effective.getSpindle());
        if (spindle != null) {
            List<String> known = dataManager.loadValue(
                            "select e.numberMark from Spindle e order by e.numberMark", String.class)
                    .list();
            if (known.stream().noneMatch(mark -> mark.equalsIgnoreCase(spindle))) {
                toolStatusPublisher.complete(startStatus,
                        message("analyzeSpindleAnomalies.invalidStatus"), toolContext);
                return SpindleAnomalyAnalysisResult.failure(
                        "Unknown spindle \"" + spindle + "\". Available spindles: "
                                + String.join(", ", known) + ". Call the tool again with one of these "
                                + "number marks, or omit \"spindle\" to analyze all of them.");
            }
        }

        LocalDate from;
        LocalDate to;
        try {
            from = parseDate(effective.getFromDate());
            to = parseDate(effective.getToDate());
        } catch (DateTimeParseException e) {
            toolStatusPublisher.complete(startStatus,
                    message("analyzeSpindleAnomalies.invalidStatus"), toolContext);
            return SpindleAnomalyAnalysisResult.failure(
                    "Could not parse the date filters. Use ISO format, e.g. \"2026-08-18\".");
        }
        if (from != null && to != null && from.isAfter(to)) {
            toolStatusPublisher.complete(startStatus,
                    message("analyzeSpindleAnomalies.invalidStatus"), toolContext);
            return SpindleAnomalyAnalysisResult.failure(
                    "fromDate " + from + " is after toDate " + to + " - swap or fix the range.");
        }

        log.debug("LLM tool call: analyzeSpindleAnomalies(spindle={}, from={}, to={})", spindle, from, to);

        SpindleAnomalyAnalysisResult result;
        try {
            result = analysisService.analyze(spindle, from, to, effective.getMaxFindings());
        } catch (RuntimeException e) {
            // Publish a generic status only; technical details stay in the server log.
            log.error("Spindle anomaly analysis failed for tool call", e);
            toolStatusPublisher.complete(startStatus,
                    message("analyzeSpindleAnomalies.failStatus"), toolContext);
            throw e;
        }

        toolStatusPublisher.complete(startStatus, result.success()
                        ? messages.formatMessage(SpindleAnalysisTools.class,
                        "analyzeSpindleAnomalies.successStatus",
                        result.characteristicCount(), result.findings().size())
                        : message("analyzeSpindleAnomalies.invalidStatus"),
                toolContext);
        return result;
    }

    @Nullable
    private static String normalize(@Nullable String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }

    @Nullable
    private static LocalDate parseDate(@Nullable String value) {
        String normalized = normalize(value);
        return normalized == null ? null : LocalDate.parse(normalized);
    }

    private String message(String key) {
        return messages.getMessage(SpindleAnalysisTools.class, key);
    }
}
