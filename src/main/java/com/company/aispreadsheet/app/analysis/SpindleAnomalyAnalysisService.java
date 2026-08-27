package com.company.aispreadsheet.app.analysis;

import com.company.aispreadsheet.entity.CharacteristicType;
import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import io.jmix.core.DataManager;
import io.jmix.core.FetchPlan;
import org.jspecify.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;

/**
 * Analyzes spindle measurement data for anomalies: out-of-tolerance measurements, spindles
 * with an elevated out-of-tolerance rate versus the fleet, deviation drift over time,
 * machine-level spindle degradation (broad same-direction drift indicating the spindle
 * needs maintenance rather than a worn cutting tool), statistical outliers, and low
 * process capability (Cpk).
 * <p>
 * Loads via {@code DataManager} under the calling user's permissions; all statistics are
 * computed in memory (the dataset is bounded per period). The math lives in package-private
 * methods over a flat row model so it is unit-testable without Spring.
 */
@Service
public class SpindleAnomalyAnalysisService {

    private static final Logger log = LoggerFactory.getLogger(SpindleAnomalyAnalysisService.class);

    static final int DEFAULT_MAX_FINDINGS = 50;
    static final int HARD_MAX_FINDINGS = 200;
    static final int MAX_OOT_FINDINGS_PER_SPINDLE = 20;
    static final int MAX_GROUP_FINDINGS_PER_SPINDLE = 10;

    static final int DRIFT_MIN_POINTS = 5;
    static final double DRIFT_MIN_SPAN_DAYS = 2.0;
    static final double DRIFT_MIN_TOTAL_MOVE = 0.3;
    static final double DRIFT_MIN_R2 = 0.5;
    static final int DEGRADATION_MIN_DRIFTING_CHARS = 10;
    static final double DEGRADATION_MIN_DRIFTING_FRACTION = 0.5;
    static final double DEGRADATION_DIRECTION_CONSISTENCY = 0.9;
    static final int DEGRADATION_MIN_TYPES = 3;
    static final double DEGRADATION_RESET_STEP = 0.4;
    static final double DEGRADATION_MAX_RESET_FRACTION = 0.25;
    static final double DEGRADATION_CRITICAL_DAYS = 7.0;
    static final int OUTLIER_MIN_POINTS = 8;
    static final double OUTLIER_MIN_Z = 3.0;
    static final int CPK_MIN_POINTS = 10;
    static final double CPK_WARNING = 1.0;
    static final double CPK_CRITICAL = 0.67;

    /**
     * Flat, self-contained view of one measured characteristic. {@code normalized} is the
     * deviation mapped onto the tolerance band: -1..1 means in tolerance, |n| &gt; 1 is out.
     */
    record Row(String spindle, String spindleType, String characteristic,
               @Nullable CharacteristicType charType, String partId,
               LocalDateTime measuredAt, BigDecimal nominal, BigDecimal actual,
               BigDecimal deviation, BigDecimal tolMinus, BigDecimal tolPlus,
               boolean outOfTol, boolean bilateral, double normalized) {
    }

    /**
     * Least-squares fit of one spindle/characteristic series (normalized deviation vs days).
     * {@code qualifies} marks fits passing the per-characteristic DRIFT gates; {@code resetStep}
     * marks series with a large counter-step, the signature of a tool change.
     */
    record DriftFit(String spindle, String characteristic, @Nullable CharacteristicType charType,
                    LocalDateTime lastAt, BigDecimal nominal, BigDecimal tolMinus, BigDecimal tolPlus,
                    double slope, double r2, double spanDays, double totalMove,
                    double predictedEnd, boolean resetStep, boolean qualifies) {
    }

    private final DataManager dataManager;

    public SpindleAnomalyAnalysisService(DataManager dataManager) {
        this.dataManager = dataManager;
    }

    /**
     * Runs the analysis over the reports matching the optional spindle and date filters.
     *
     * @param spindleNumberMark spindle to restrict to, or null for the whole fleet
     * @param from              inclusive start date, or null
     * @param to                inclusive end date, or null
     * @param maxFindingsParam  cap on returned findings, defaulted/clamped
     */
    public SpindleAnomalyAnalysisResult analyze(@Nullable String spindleNumberMark,
                                                @Nullable LocalDate from,
                                                @Nullable LocalDate to,
                                                @Nullable Integer maxFindingsParam) {
        int maxFindings = clampMaxFindings(maxFindingsParam);

        StringBuilder jpql = new StringBuilder(
                "select e from MeasurementReport e where e.machine is not null");
        if (spindleNumberMark != null && !spindleNumberMark.isBlank()) {
            jpql.append(" and e.machine.numberMark = :spindle");
        }
        if (from != null) {
            jpql.append(" and e.measurementDateTime >= :fromDt");
        }
        if (to != null) {
            jpql.append(" and e.measurementDateTime <= :toDt");
        }
        jpql.append(" order by e.measurementDateTime");

        var loader = dataManager.load(MeasurementReport.class)
                .query(jpql.toString())
                .fetchPlan(fp -> fp.addFetchPlan(FetchPlan.BASE)
                        .add("machine", FetchPlan.BASE)
                        .add("characteristics", FetchPlan.BASE));
        if (spindleNumberMark != null && !spindleNumberMark.isBlank()) {
            loader = loader.parameter("spindle", spindleNumberMark.trim());
        }
        if (from != null) {
            loader = loader.parameter("fromDt", from.atStartOfDay());
        }
        if (to != null) {
            loader = loader.parameter("toDt", to.atTime(23, 59, 59));
        }
        List<MeasurementReport> reports = loader.list();
        log.debug("Spindle anomaly analysis loaded {} reports (spindle={}, from={}, to={})",
                reports.size(), spindleNumberMark, from, to);

        List<Row> rows = new ArrayList<>();
        Map<String, Integer> reportCountBySpindle = new TreeMap<>();
        Map<String, String> spindleTypes = new TreeMap<>();
        for (MeasurementReport report : reports) {
            String spindle = report.getMachine().getNumberMark();
            reportCountBySpindle.merge(spindle, 1, Integer::sum);
            spindleTypes.putIfAbsent(spindle,
                    report.getMachine().getType() == null ? "" : report.getMachine().getType());
            if (report.getCharacteristics() == null || report.getMeasurementDateTime() == null) {
                continue;
            }
            for (MeasurementCharacteristic characteristic : report.getCharacteristics()) {
                Row row = toRow(spindle, spindleTypes.get(spindle), report, characteristic);
                if (row != null) {
                    rows.add(row);
                }
            }
        }

        boolean fleetComparison = spindleNumberMark == null || spindleNumberMark.isBlank();
        return buildResult(rows, reportCountBySpindle, spindleTypes, fleetComparison, maxFindings);
    }

    @Nullable
    private Row toRow(String spindle, String spindleType, MeasurementReport report,
                      MeasurementCharacteristic characteristic) {
        BigDecimal deviation = characteristic.getDeviation();
        BigDecimal tolMinus = characteristic.getTolMinus();
        BigDecimal tolPlus = characteristic.getTolPlus();
        if (deviation == null || tolMinus == null || tolPlus == null
                || characteristic.getName() == null) {
            return null;
        }
        double band = tolPlus.doubleValue() - tolMinus.doubleValue();
        if (band <= 0) {
            return null;
        }
        double mid = (tolPlus.doubleValue() + tolMinus.doubleValue()) / 2.0;
        double normalized = (deviation.doubleValue() - mid) / (band / 2.0);
        boolean outOfTol = Boolean.TRUE.equals(characteristic.getOutOfTol())
                || Math.abs(normalized) > 1.0;
        boolean bilateral = tolMinus.signum() < 0;
        return new Row(spindle, spindleType, characteristic.getName(), characteristic.getType(),
                report.getPartId(), report.getMeasurementDateTime(),
                characteristic.getNominal(), characteristic.getActual(),
                deviation, tolMinus, tolPlus, outOfTol, bilateral, normalized);
    }

    /**
     * Pure computation over the flat rows; package-private for unit tests.
     */
    SpindleAnomalyAnalysisResult buildResult(List<Row> rows,
                                             Map<String, Integer> reportCountBySpindle,
                                             Map<String, String> spindleTypes,
                                             boolean fleetComparison,
                                             int maxFindings) {
        if (rows.isEmpty()) {
            return SpindleAnomalyAnalysisResult.failure(
                    "No measurement data matched the given spindle/date filters. "
                            + "Widen the period or check the spindle number mark.");
        }

        List<AnomalyFinding> findings = new ArrayList<>();
        Map<String, List<Row>> rowsBySpindle = groupBy(rows, Row::spindle);
        Map<String, List<Row>> groups = groupBy(rows,
                row -> row.spindle() + "|" + row.characteristic());

        findOutOfTolerance(rowsBySpindle, findings);
        long totalOot = rows.stream().filter(Row::outOfTol).count();
        double fleetRate = (double) totalOot / rows.size();
        if (fleetComparison && rowsBySpindle.size() > 1) {
            findElevatedOotRates(rowsBySpindle, fleetRate, findings);
        }
        List<DriftFit> driftFits = computeDriftFits(groups);
        Set<String> degradedSpindles = findSpindleDegradation(driftFits, findings);
        findDrift(driftFits, degradedSpindles, findings);
        findOutliers(groups, findings);
        Map<String, double[]> minCpkBySpindle = findLowCapability(groups, findings);

        findings.sort(Comparator
                .comparing((AnomalyFinding f) -> f.severity().ordinal())
                .thenComparing(f -> f.metric() == null ? 0.0 : -Math.abs(f.metric().doubleValue())));
        boolean capped = findings.size() > maxFindings;
        List<AnomalyFinding> reported = capped
                ? List.copyOf(findings.subList(0, maxFindings))
                : List.copyOf(findings);

        List<SpindleSummary> summaries = new ArrayList<>();
        for (Map.Entry<String, List<Row>> entry : rowsBySpindle.entrySet()) {
            String spindle = entry.getKey();
            List<Row> spindleRows = entry.getValue();
            int oot = (int) spindleRows.stream().filter(Row::outOfTol).count();
            double[] minCpk = minCpkBySpindle.get(spindle);
            summaries.add(new SpindleSummary(spindle,
                    spindleTypes.getOrDefault(spindle, ""),
                    reportCountBySpindle.getOrDefault(spindle, 0),
                    spindleRows.size(), oot,
                    percent(oot, spindleRows.size()),
                    minCpk == null ? null : round(minCpk[0], 2),
                    minCpk == null ? null : groups.entrySet().stream()
                            .filter(g -> g.getKey().startsWith(spindle + "|"))
                            .filter(g -> cpkOf(g.getValue()) != null
                                    && Math.abs(cpkOf(g.getValue()) - minCpk[0]) < 1e-9)
                            .map(g -> g.getKey().substring(spindle.length() + 1))
                            .findFirst().orElse(null),
                    (int) findings.stream().filter(f -> f.spindle().equals(spindle)).count(),
                    degradedSpindles.contains(spindle)));
        }
        summaries.sort(Comparator.comparing(SpindleSummary::outOfTolRatePct).reversed());

        LocalDateTime first = rows.stream().map(Row::measuredAt).min(Comparator.naturalOrder()).orElse(null);
        LocalDateTime last = rows.stream().map(Row::measuredAt).max(Comparator.naturalOrder()).orElse(null);

        StringBuilder note = new StringBuilder("Findings sorted most severe first.");
        if (capped) {
            note.append(" Capped at ").append(maxFindings).append(" of ")
                    .append(findings.size()).append(" findings.");
        }
        if (!fleetComparison) {
            note.append(" Fleet-rate comparison skipped (single-spindle analysis).");
        }
        if (!degradedSpindles.isEmpty()) {
            note.append(" Spindle(s) ").append(String.join(", ", degradedSpindles))
                    .append(" show machine-level degradation (SPINDLE_DEGRADATION) - recommend "
                            + "scheduling maintenance; their per-characteristic DRIFT findings are "
                            + "consolidated into that single finding.");
        }
        note.append(" Build the report spreadsheet from this result with app_createSpreadsheet: "
                + "a summary sheet from 'spindles' and a findings sheet from 'findings'; "
                + "compute totals with formulas, do not invent numbers.");

        return new SpindleAnomalyAnalysisResult(true,
                first == null ? null : first.toString(),
                last == null ? null : last.toString(),
                rowsBySpindle.size(),
                reportCountBySpindle.values().stream().mapToInt(Integer::intValue).sum(),
                rows.size(),
                percent((int) totalOot, rows.size()),
                List.copyOf(summaries),
                reported,
                note.toString());
    }

    private void findOutOfTolerance(Map<String, List<Row>> rowsBySpindle, List<AnomalyFinding> findings) {
        for (List<Row> spindleRows : rowsBySpindle.values()) {
            spindleRows.stream()
                    .filter(Row::outOfTol)
                    .sorted(Comparator.comparing(row -> -Math.abs(row.normalized())))
                    .limit(MAX_OOT_FINDINGS_PER_SPINDLE)
                    .forEach(row -> findings.add(new AnomalyFinding(row.spindle(), row.characteristic(),
                            AnomalyType.OUT_OF_TOLERANCE, AnomalySeverity.CRITICAL,
                            row.partId(), row.measuredAt().toString(),
                            row.actual(), row.nominal(), row.tolMinus(), row.tolPlus(),
                            round(row.normalized(), 2),
                            "Deviation " + row.deviation() + " is outside the tolerance band ["
                                    + row.tolMinus() + ", " + row.tolPlus() + "] ("
                                    + round(Math.abs(row.normalized()) * 100, 0) + "% of half-band used).")));
        }
    }

    private void findElevatedOotRates(Map<String, List<Row>> rowsBySpindle, double fleetRate,
                                      List<AnomalyFinding> findings) {
        for (Map.Entry<String, List<Row>> entry : rowsBySpindle.entrySet()) {
            List<Row> spindleRows = entry.getValue();
            if (spindleRows.size() < 100) {
                continue; // too little data for a stable rate
            }
            double rate = spindleRows.stream().filter(Row::outOfTol).count()
                    / (double) spindleRows.size();
            if (fleetRate <= 0 || rate < 0.002) {
                continue;
            }
            AnomalySeverity severity = null;
            if (rate >= 4 * fleetRate && rate >= 0.01) {
                severity = AnomalySeverity.CRITICAL;
            } else if (rate >= 2 * fleetRate) {
                severity = AnomalySeverity.WARNING;
            }
            if (severity != null) {
                findings.add(new AnomalyFinding(entry.getKey(), "-",
                        AnomalyType.ELEVATED_OOT_RATE, severity,
                        null, null, null, null, null, null,
                        round(rate * 100, 2),
                        "Out-of-tolerance rate " + round(rate * 100, 2)
                                + "% is well above the fleet average of "
                                + round(fleetRate * 100, 2) + "%."));
            }
        }
    }

    /**
     * Fits every spindle/characteristic series once; the fits feed both the per-characteristic
     * DRIFT check and the spindle-level degradation check.
     */
    private List<DriftFit> computeDriftFits(Map<String, List<Row>> groups) {
        List<DriftFit> fits = new ArrayList<>();
        for (List<Row> group : groups.values()) {
            if (group.size() < DRIFT_MIN_POINTS) {
                continue;
            }
            List<Row> sorted = group.stream()
                    .sorted(Comparator.comparing(Row::measuredAt)).toList();
            LocalDateTime start = sorted.get(0).measuredAt();
            double[] x = new double[sorted.size()];
            double[] y = new double[sorted.size()];
            for (int i = 0; i < sorted.size(); i++) {
                x[i] = Duration.between(start, sorted.get(i).measuredAt()).toMinutes() / 1440.0;
                y[i] = sorted.get(i).normalized();
            }
            double spanDays = x[x.length - 1];
            if (spanDays < DRIFT_MIN_SPAN_DAYS) {
                continue;
            }
            double[] fit = leastSquares(x, y);
            double slope = fit[0];
            double r2 = fit[2];
            double totalMove = slope * spanDays;
            boolean qualifies = Math.abs(totalMove) >= DRIFT_MIN_TOTAL_MOVE && r2 >= DRIFT_MIN_R2;
            Row lastRow = sorted.get(sorted.size() - 1);
            fits.add(new DriftFit(lastRow.spindle(), lastRow.characteristic(), lastRow.charType(),
                    lastRow.measuredAt(), lastRow.nominal(), lastRow.tolMinus(), lastRow.tolPlus(),
                    slope, r2, spanDays, totalMove, fit[1] + slope * spanDays,
                    hasResetStep(y, slope), qualifies));
        }
        return fits;
    }

    /**
     * True when the series takes a large step against its overall trend — the signature of a
     * tool change resetting accumulated wear, which argues against machine-level degradation.
     */
    static boolean hasResetStep(double[] y, double slope) {
        if (slope == 0) {
            return false;
        }
        for (int i = 1; i < y.length; i++) {
            double step = y[i] - y[i - 1];
            if (Math.signum(step) == -Math.signum(slope)
                    && Math.abs(step) > DEGRADATION_RESET_STEP) {
                return true;
            }
        }
        return false;
    }

    /**
     * Detects spindles whose drift is machine-level (deteriorating spindle needing maintenance)
     * rather than cutting-tool wear: most characteristics across several characteristic types
     * drift in the same direction — diameters included, whereas a worn cutter makes holes
     * smaller — with no tool-change resets. Emits one finding per affected spindle and returns
     * the affected spindles so their per-characteristic DRIFT findings can be consolidated.
     */
    private Set<String> findSpindleDegradation(List<DriftFit> fits, List<AnomalyFinding> findings) {
        Set<String> degraded = new LinkedHashSet<>();
        Map<String, List<DriftFit>> bySpindle = new LinkedHashMap<>();
        for (DriftFit fit : fits) {
            bySpindle.computeIfAbsent(fit.spindle(), s -> new ArrayList<>()).add(fit);
        }
        for (Map.Entry<String, List<DriftFit>> entry : bySpindle.entrySet()) {
            List<DriftFit> eligible = entry.getValue();
            List<DriftFit> drifting = eligible.stream().filter(DriftFit::qualifies).toList();
            if (drifting.size() < DEGRADATION_MIN_DRIFTING_CHARS
                    || drifting.size() < DEGRADATION_MIN_DRIFTING_FRACTION * eligible.size()) {
                continue;
            }
            long positiveCount = drifting.stream().filter(f -> f.slope() > 0).count();
            int dominantSign = positiveCount * 2 >= drifting.size() ? 1 : -1;
            long dominantCount = dominantSign > 0 ? positiveCount : drifting.size() - positiveCount;
            if ((double) dominantCount / drifting.size() < DEGRADATION_DIRECTION_CONSISTENCY) {
                continue;
            }
            List<DriftFit> dominant = drifting.stream()
                    .filter(f -> Math.signum(f.slope()) == dominantSign).toList();
            long distinctTypes = dominant.stream().map(DriftFit::charType)
                    .filter(Objects::nonNull).distinct().count();
            if (distinctTypes < DEGRADATION_MIN_TYPES) {
                continue;
            }
            double diameterMeanSlope = drifting.stream()
                    .filter(f -> f.charType() == CharacteristicType.DIAMETER)
                    .mapToDouble(DriftFit::slope).average().orElse(Double.NaN);
            if (!Double.isNaN(diameterMeanSlope)
                    && Math.signum(diameterMeanSlope) != dominantSign) {
                continue;
            }
            long resets = drifting.stream().filter(DriftFit::resetStep).count();
            if ((double) resets / drifting.size() > DEGRADATION_MAX_RESET_FRACTION) {
                continue;
            }

            double[] daysToLimit = dominant.stream()
                    .mapToDouble(f -> Math.max(0,
                            (1 - dominantSign * f.predictedEnd()) / Math.abs(f.slope())))
                    .sorted().toArray();
            double medianDays = daysToLimit.length % 2 == 1
                    ? daysToLimit[daysToLimit.length / 2]
                    : (daysToLimit[daysToLimit.length / 2 - 1]
                            + daysToLimit[daysToLimit.length / 2]) / 2.0;
            AnomalySeverity severity = medianDays <= DEGRADATION_CRITICAL_DAYS
                    ? AnomalySeverity.CRITICAL : AnomalySeverity.WARNING;

            double meanAbsSlope = dominant.stream()
                    .mapToDouble(f -> Math.abs(f.slope())).average().orElse(0);
            double avgAbsMove = dominant.stream()
                    .mapToDouble(f -> Math.abs(f.totalMove())).average().orElse(0);
            double maxSpanDays = dominant.stream()
                    .mapToDouble(DriftFit::spanDays).max().orElse(0);
            LocalDateTime lastAt = dominant.stream().map(DriftFit::lastAt)
                    .max(Comparator.naturalOrder()).orElseThrow();
            boolean growingDiameters = !Double.isNaN(diameterMeanSlope)
                    && diameterMeanSlope > 0 && dominantSign > 0;

            String description = "Machine-level drift: " + drifting.size() + " of "
                    + eligible.size() + " characteristics across " + distinctTypes
                    + " characteristic types drift in the same "
                    + (dominantSign > 0 ? "positive" : "negative")
                    + " direction, on average " + round(avgAbsMove * 100, 0)
                    + "% of the half-band over " + round(maxSpanDays, 1) + " days"
                    + (growingDiameters
                            ? " - including hole diameters growing, which rules out cutter wear"
                                    + " (a worn cutter makes holes smaller)"
                            : "")
                    + ". This is not normal cutting-plate wear (that would affect only one tool's"
                    + " characteristics and reset at tool changes): the spindle itself appears to"
                    + " be deteriorating (axis calibration drift, thermal growth or tool-offset"
                    + " error) and needs maintenance soon - projected to reach the tolerance limit"
                    + " in ~" + round(medianDays, 1) + " days. Consolidates " + drifting.size()
                    + " per-characteristic drift signals.";
            findings.add(new AnomalyFinding(entry.getKey(), "-",
                    AnomalyType.SPINDLE_DEGRADATION, severity,
                    null, lastAt.toString(), null, null, null, null,
                    round(meanAbsSlope, 4), description));
            degraded.add(entry.getKey());
        }
        return degraded;
    }

    private void findDrift(List<DriftFit> fits, Set<String> degradedSpindles,
                           List<AnomalyFinding> findings) {
        Map<String, List<AnomalyFinding>> perSpindle = new LinkedHashMap<>();
        for (DriftFit fit : fits) {
            if (!fit.qualifies() || degradedSpindles.contains(fit.spindle())) {
                continue; // degraded spindles get one consolidated SPINDLE_DEGRADATION finding
            }
            AnomalySeverity severity = Math.abs(fit.predictedEnd()) > 0.9
                    ? AnomalySeverity.CRITICAL : AnomalySeverity.WARNING;
            AnomalyFinding finding = new AnomalyFinding(fit.spindle(), fit.characteristic(),
                    AnomalyType.DRIFT, severity,
                    null, fit.lastAt().toString(),
                    null, fit.nominal(), fit.tolMinus(), fit.tolPlus(),
                    round(fit.slope(), 4),
                    "Deviation is trending toward the " + (fit.slope() > 0 ? "upper" : "lower")
                            + " tolerance limit: moved " + round(Math.abs(fit.totalMove()) * 100, 0)
                            + "% of the half-band over " + round(fit.spanDays(), 1)
                            + " days (R2=" + round(fit.r2(), 2) + ").");
            perSpindle.computeIfAbsent(fit.spindle(), s -> new ArrayList<>()).add(finding);
        }
        capPerSpindle(perSpindle, findings);
    }

    private void findOutliers(Map<String, List<Row>> groups, List<AnomalyFinding> findings) {
        Map<String, List<AnomalyFinding>> perSpindle = new LinkedHashMap<>();
        for (List<Row> group : groups.values()) {
            if (group.size() < OUTLIER_MIN_POINTS) {
                continue;
            }
            double[] stats = meanAndStdDev(group.stream()
                    .mapToDouble(Row::normalized).toArray());
            if (stats[1] < 1e-9) {
                continue;
            }
            for (Row row : group) {
                if (row.outOfTol()) {
                    continue; // already reported as OUT_OF_TOLERANCE
                }
                double z = (row.normalized() - stats[0]) / stats[1];
                if (Math.abs(z) >= OUTLIER_MIN_Z) {
                    perSpindle.computeIfAbsent(row.spindle(), s -> new ArrayList<>())
                            .add(new AnomalyFinding(row.spindle(), row.characteristic(),
                                    AnomalyType.STATISTICAL_OUTLIER, AnomalySeverity.WARNING,
                                    row.partId(), row.measuredAt().toString(),
                                    row.actual(), row.nominal(), row.tolMinus(), row.tolPlus(),
                                    round(z, 2),
                                    "Measurement is " + round(Math.abs(z), 1)
                                            + " standard deviations from this spindle/characteristic "
                                            + "average (still in tolerance)."));
                }
            }
        }
        capPerSpindle(perSpindle, findings);
    }

    private Map<String, double[]> findLowCapability(Map<String, List<Row>> groups,
                                                    List<AnomalyFinding> findings) {
        Map<String, double[]> minCpkBySpindle = new LinkedHashMap<>();
        Map<String, List<AnomalyFinding>> perSpindle = new LinkedHashMap<>();
        for (List<Row> group : groups.values()) {
            Double cpk = cpkOf(group);
            if (cpk == null) {
                continue;
            }
            Row sample = group.get(0);
            minCpkBySpindle.merge(sample.spindle(), new double[]{cpk},
                    (a, b) -> a[0] <= b[0] ? a : b);
            if (cpk < CPK_WARNING) {
                AnomalySeverity severity = cpk < CPK_CRITICAL
                        ? AnomalySeverity.CRITICAL : AnomalySeverity.WARNING;
                perSpindle.computeIfAbsent(sample.spindle(), s -> new ArrayList<>())
                        .add(new AnomalyFinding(sample.spindle(), sample.characteristic(),
                                AnomalyType.LOW_CAPABILITY, severity,
                                null, null, null, sample.nominal(),
                                sample.tolMinus(), sample.tolPlus(),
                                round(cpk, 2),
                                "Process capability Cpk=" + round(cpk, 2)
                                        + " over " + group.size()
                                        + " measurements (below the customary 1.33 minimum)."));
            }
        }
        capPerSpindle(perSpindle, findings);
        return minCpkBySpindle;
    }

    /**
     * Cpk of a bilateral spindle/characteristic group, or null when not computable.
     */
    @Nullable
    Double cpkOf(List<Row> group) {
        if (group.size() < CPK_MIN_POINTS || !group.get(0).bilateral()) {
            return null;
        }
        double tolPlus = group.get(0).tolPlus().doubleValue();
        double tolMinus = group.get(0).tolMinus().doubleValue();
        double[] stats = meanAndStdDev(group.stream()
                .mapToDouble(row -> row.deviation().doubleValue()).toArray());
        if (stats[1] < 1e-12) {
            return null;
        }
        return Math.min(tolPlus - stats[0], stats[0] - tolMinus) / (3 * stats[1]);
    }

    private void capPerSpindle(Map<String, List<AnomalyFinding>> perSpindle,
                               List<AnomalyFinding> findings) {
        for (List<AnomalyFinding> spindleFindings : perSpindle.values()) {
            spindleFindings.stream()
                    .sorted(Comparator.comparing(f ->
                            f.metric() == null ? 0.0 : -Math.abs(f.metric().doubleValue())))
                    .limit(MAX_GROUP_FINDINGS_PER_SPINDLE)
                    .forEach(findings::add);
        }
    }

    /**
     * Simple least squares fit; returns {slope, intercept, r2}.
     */
    static double[] leastSquares(double[] x, double[] y) {
        int n = x.length;
        double sumX = 0, sumY = 0, sumXy = 0, sumXx = 0;
        for (int i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXy += x[i] * y[i];
            sumXx += x[i] * x[i];
        }
        double denominator = n * sumXx - sumX * sumX;
        if (Math.abs(denominator) < 1e-12) {
            return new double[]{0, sumY / n, 0};
        }
        double slope = (n * sumXy - sumX * sumY) / denominator;
        double intercept = (sumY - slope * sumX) / n;
        double meanY = sumY / n;
        double ssTot = 0, ssRes = 0;
        for (int i = 0; i < n; i++) {
            double predicted = intercept + slope * x[i];
            ssTot += (y[i] - meanY) * (y[i] - meanY);
            ssRes += (y[i] - predicted) * (y[i] - predicted);
        }
        double r2 = ssTot < 1e-12 ? 0 : 1 - ssRes / ssTot;
        return new double[]{slope, intercept, r2};
    }

    /**
     * Returns {mean, sample standard deviation}.
     */
    static double[] meanAndStdDev(double[] values) {
        double sum = 0;
        for (double value : values) {
            sum += value;
        }
        double mean = sum / values.length;
        double sq = 0;
        for (double value : values) {
            sq += (value - mean) * (value - mean);
        }
        double stdDev = values.length < 2 ? 0 : Math.sqrt(sq / (values.length - 1));
        return new double[]{mean, stdDev};
    }

    private static <K> Map<K, List<Row>> groupBy(List<Row> rows,
                                                 java.util.function.Function<Row, K> classifier) {
        Map<K, List<Row>> result = new LinkedHashMap<>();
        for (Row row : rows) {
            result.computeIfAbsent(classifier.apply(row), k -> new ArrayList<>()).add(row);
        }
        return result;
    }

    private static BigDecimal percent(int part, int total) {
        if (total == 0) {
            return BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        }
        return BigDecimal.valueOf(part * 100.0 / total).setScale(2, RoundingMode.HALF_UP);
    }

    private static BigDecimal round(double value, int scale) {
        return BigDecimal.valueOf(value).setScale(scale, RoundingMode.HALF_UP);
    }

    private static int clampMaxFindings(@Nullable Integer requested) {
        if (requested == null || requested <= 0) {
            return DEFAULT_MAX_FINDINGS;
        }
        return Math.min(requested, HARD_MAX_FINDINGS);
    }
}
