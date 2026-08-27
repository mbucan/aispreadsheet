package com.company.aispreadsheet.app.analysis;

import com.company.aispreadsheet.app.analysis.SpindleAnomalyAnalysisService.Row;
import com.company.aispreadsheet.entity.CharacteristicType;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.offset;

/**
 * Unit test of the pure analysis math on synthetic rows — no Spring, no database.
 */
class SpindleAnomalyMathTest {

    private static final LocalDateTime BASE = LocalDateTime.of(2026, 8, 17, 8, 0);

    private final SpindleAnomalyAnalysisService service = new SpindleAnomalyAnalysisService(null);

    @Test
    void leastSquaresFitsPerfectLine() {
        double[] fit = SpindleAnomalyAnalysisService.leastSquares(
                new double[]{0, 1, 2, 3}, new double[]{1, 3, 5, 7});
        assertThat(fit[0]).isCloseTo(2.0, offset(1e-9));
        assertThat(fit[1]).isCloseTo(1.0, offset(1e-9));
        assertThat(fit[2]).isCloseTo(1.0, offset(1e-9));
    }

    @Test
    void meanAndStdDevComputesSampleStatistics() {
        double[] stats = SpindleAnomalyAnalysisService.meanAndStdDev(new double[]{2, 4, 4, 4, 5, 5, 7, 9});
        assertThat(stats[0]).isCloseTo(5.0, offset(1e-9));
        assertThat(stats[1]).isCloseTo(2.138, offset(0.001));
    }

    @Test
    void outOfToleranceRowBecomesCriticalFinding() {
        List<Row> rows = List.of(
                row("S1", "Char_A", 0, 0.010, false),
                row("S1", "Char_A", 0, 0.060, true));

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.success()).isTrue();
        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.OUT_OF_TOLERANCE);
            assertThat(finding.severity()).isEqualTo(AnomalySeverity.CRITICAL);
            assertThat(finding.characteristic()).isEqualTo("Char_A");
        });
        assertThat(result.spindles()).hasSize(1);
        assertThat(result.spindles().get(0).outOfTolCount()).isEqualTo(1);
    }

    @Test
    void risingSeriesIsFlaggedAsDrift() {
        List<Row> rows = new ArrayList<>();
        for (int day = 0; day <= 4; day++) {
            rows.add(rowAt("S1", "Char_D", BASE.plusDays(day), 0.2 * day * 0.05, false));
        }

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.DRIFT);
            assertThat(finding.characteristic()).isEqualTo("Char_D");
            assertThat(finding.description()).contains("upper");
        });
    }

    @Test
    void broadSameDirectionDriftFlagsSpindleDegradation() {
        // 12 characteristics of 4 types all drifting positive: machine-level, not tool wear
        List<Row> rows = new ArrayList<>();
        CharacteristicType[] types = {CharacteristicType.DISTANCE, CharacteristicType.ANGLE,
                CharacteristicType.DIAMETER, CharacteristicType.PROFILE_POINT};
        for (int c = 0; c < 12; c++) {
            for (int day = 0; day <= 6; day++) {
                rows.add(rowAt("S1", "Char_" + c, types[c / 3],
                        BASE.plusDays(day), 0.005 * day, false));
            }
        }

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.findings())
                .filteredOn(finding -> finding.type() == AnomalyType.SPINDLE_DEGRADATION)
                .singleElement()
                .satisfies(finding -> {
                    assertThat(finding.spindle()).isEqualTo("S1");
                    assertThat(finding.severity()).isEqualTo(AnomalySeverity.CRITICAL);
                    assertThat(finding.characteristic()).isEqualTo("-");
                    assertThat(finding.description()).contains("maintenance");
                });
        assertThat(result.findings())
                .noneMatch(finding -> finding.type() == AnomalyType.DRIFT);
        assertThat(result.spindles().get(0).degradationSuspected()).isTrue();
        assertThat(result.note()).contains("SPINDLE_DEGRADATION");
    }

    @Test
    void localizedNegativeDiameterDriftIsToolWearNotDegradation() {
        // only the 3 diameter series drift, and downward - a worn cutter, not the spindle
        List<Row> rows = new ArrayList<>();
        CharacteristicType[] types = {CharacteristicType.DISTANCE, CharacteristicType.ANGLE,
                CharacteristicType.DIAMETER, CharacteristicType.PROFILE_POINT};
        for (int c = 0; c < 12; c++) {
            for (int day = 0; day <= 6; day++) {
                double deviation = types[c / 3] == CharacteristicType.DIAMETER
                        ? -0.005 * day : 0.005;
                rows.add(rowAt("S1", "Char_" + c, types[c / 3],
                        BASE.plusDays(day), deviation, false));
            }
        }

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.findings())
                .noneMatch(finding -> finding.type() == AnomalyType.SPINDLE_DEGRADATION);
        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.DRIFT);
            assertThat(finding.description()).contains("lower");
        });
        assertThat(result.spindles().get(0).degradationSuspected()).isFalse();
    }

    @Test
    void broadDriftWithShrinkingDiametersIsNotDegradation() {
        // 9 characteristics drift positive but the diameters shrink: mixed causes, keep DRIFT
        List<Row> rows = new ArrayList<>();
        CharacteristicType[] types = {CharacteristicType.DISTANCE, CharacteristicType.ANGLE,
                CharacteristicType.DIAMETER, CharacteristicType.PROFILE_POINT};
        for (int c = 0; c < 12; c++) {
            for (int day = 0; day <= 6; day++) {
                double sign = types[c / 3] == CharacteristicType.DIAMETER ? -1 : 1;
                rows.add(rowAt("S1", "Char_" + c, types[c / 3],
                        BASE.plusDays(day), sign * 0.005 * day, false));
            }
        }

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.findings())
                .noneMatch(finding -> finding.type() == AnomalyType.SPINDLE_DEGRADATION);
        assertThat(result.findings())
                .anyMatch(finding -> finding.type() == AnomalyType.DRIFT);
    }

    @Test
    void resetStepIsDetected() {
        double[] sawtooth = {0, 0.15, 0.3, 0.45, 0.6, 0.15, 0.3, 0.45, 0.6};
        double[] smoothRamp = {0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6};

        assertThat(SpindleAnomalyAnalysisService.hasResetStep(sawtooth, 0.05)).isTrue();
        assertThat(SpindleAnomalyAnalysisService.hasResetStep(smoothRamp, 0.1)).isFalse();
    }

    @Test
    void inTolerancePointFarFromHistoryIsAnOutlier() {
        List<Row> rows = new ArrayList<>();
        for (int i = 0; i < 15; i++) {
            rows.add(row("S1", "Char_O", i, 0.005, false));
        }
        rows.add(row("S1", "Char_O", 15, 0.045, false));

        SpindleAnomalyAnalysisResult result = build(rows, true);

        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.STATISTICAL_OUTLIER);
            assertThat(finding.metric().doubleValue()).isGreaterThan(3.0);
        });
    }

    @Test
    void wideSpreadGroupHasLowCapability() {
        List<Row> rows = new ArrayList<>();
        for (int i = 0; i < 12; i++) {
            rows.add(row("S1", "Char_C", i, i % 2 == 0 ? 0.02 : -0.02, false));
        }

        SpindleAnomalyAnalysisResult result = build(rows, true);

        Double cpk = service.cpkOf(rows);
        assertThat(cpk).isNotNull();
        assertThat(cpk).isLessThan(1.0);
        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.LOW_CAPABILITY);
            assertThat(finding.severity()).isEqualTo(AnomalySeverity.WARNING);
        });
        assertThat(result.spindles().get(0).minCpk()).isNotNull();
    }

    @Test
    void emptyDataYieldsGuidingFailure() {
        SpindleAnomalyAnalysisResult result = build(List.of(), true);

        assertThat(result.success()).isFalse();
        assertThat(result.note()).contains("No measurement data");
    }

    @Test
    void findingsAreCappedAndNoted() {
        List<Row> rows = new ArrayList<>();
        for (int i = 0; i < 30; i++) {
            rows.add(row("S1", "Char_" + i, i, 0.070, true));
        }

        SpindleAnomalyAnalysisResult result = service.buildResult(rows,
                Map.of("S1", 30), Map.of("S1", "TypeX"), true, 5);

        assertThat(result.findings()).hasSize(5);
        assertThat(result.note()).contains("Capped at 5");
    }

    private SpindleAnomalyAnalysisResult build(List<Row> rows, boolean fleetComparison) {
        return service.buildResult(rows, Map.of("S1", rows.size()),
                Map.of("S1", "TypeX"), fleetComparison, 200);
    }

    /**
     * Bilateral row with tolerance ±0.05; distinct minutes keep drift spans at zero unless
     * {@link #rowAt} is used.
     */
    private static Row row(String spindle, String characteristic, int minute,
                           double deviation, boolean outOfTol) {
        return rowAt(spindle, characteristic, BASE.plusMinutes(minute), deviation, outOfTol);
    }

    private static Row rowAt(String spindle, String characteristic, LocalDateTime at,
                             double deviation, boolean outOfTol) {
        return rowAt(spindle, characteristic, CharacteristicType.DISTANCE, at, deviation, outOfTol);
    }

    private static Row rowAt(String spindle, String characteristic, CharacteristicType charType,
                             LocalDateTime at, double deviation, boolean outOfTol) {
        double tolPlus = 0.05;
        double tolMinus = -0.05;
        double normalized = deviation / ((tolPlus - tolMinus) / 2.0);
        return new Row(spindle, "TypeX", characteristic, charType, "PART-1", at,
                BigDecimal.valueOf(10), BigDecimal.valueOf(10 + deviation),
                BigDecimal.valueOf(deviation), BigDecimal.valueOf(tolMinus),
                BigDecimal.valueOf(tolPlus), outOfTol, true, normalized);
    }
}
