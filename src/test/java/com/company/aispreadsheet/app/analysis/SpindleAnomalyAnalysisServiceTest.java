package com.company.aispreadsheet.app.analysis;

import com.company.aispreadsheet.test_support.AuthenticatedAsAdmin;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Integration test against the deterministic seed data (Random(42), seeded on startup):
 * 10 spindles, 125 reports x 90 characteristics over 7 days, with planted anomalies —
 * DMU-01 runs at 3 sigma (elevated OOT rate), DMU-02 drifts toward the upper limit across
 * all characteristics (machine-level spindle degradation, not tool wear), every 8th blade
 * has forced out-of-tolerance cooling-hole/profile characteristics.
 */
@SpringBootTest
@ExtendWith(AuthenticatedAsAdmin.class)
@ActiveProfiles("test")
class SpindleAnomalyAnalysisServiceTest {

    @Autowired
    SpindleAnomalyAnalysisService service;

    @Test
    void fullFleetAnalysisFindsPlantedAnomalies() {
        SpindleAnomalyAnalysisResult result = service.analyze(null, null, null, 200);

        assertThat(result.success()).isTrue();
        assertThat(result.spindleCount()).isEqualTo(10);
        assertThat(result.reportCount()).isEqualTo(125);
        assertThat(result.characteristicCount()).isEqualTo(125 * 90);

        // forced out-of-tolerance on cooling holes / profile points
        assertThat(result.findings()).anySatisfy(finding -> {
            assertThat(finding.type()).isEqualTo(AnomalyType.OUT_OF_TOLERANCE);
            assertThat(finding.characteristic())
                    .matches("CoolingHole_Dia.*|Aerofoil_ProfilePoint.*");
        });

        // DMU-01 (3 sigma) runs above the fleet out-of-tolerance rate
        SpindleSummary dmu01 = result.spindles().stream()
                .filter(summary -> summary.spindle().equals("DMU-01"))
                .findFirst().orElseThrow();
        assertThat(dmu01.outOfTolRatePct()).isGreaterThan(result.fleetOutOfTolRatePct());

        // DMU-02's broad drift is classified as machine-level spindle degradation, and its
        // per-characteristic DRIFT findings are consolidated into that single finding
        assertThat(result.findings())
                .filteredOn(finding -> finding.type() == AnomalyType.SPINDLE_DEGRADATION)
                .singleElement()
                .satisfies(finding -> {
                    assertThat(finding.spindle()).isEqualTo("DMU-02");
                    assertThat(finding.severity())
                            .isIn(AnomalySeverity.CRITICAL, AnomalySeverity.WARNING);
                    assertThat(finding.description()).contains("maintenance");
                });
        assertThat(result.findings())
                .noneMatch(finding -> finding.type() == AnomalyType.DRIFT
                        && finding.spindle().equals("DMU-02"));
        assertThat(result.spindles()).anySatisfy(summary -> {
            assertThat(summary.spindle()).isEqualTo("DMU-02");
            assertThat(summary.degradationSuspected()).isTrue();
        });
    }

    @Test
    void singleSpindleAnalysisIsScopedAndSkipsFleetComparison() {
        SpindleAnomalyAnalysisResult result = service.analyze("DMU-02", null, null, 100);

        assertThat(result.success()).isTrue();
        assertThat(result.spindleCount()).isEqualTo(1);
        assertThat(result.spindles()).allSatisfy(summary ->
                assertThat(summary.spindle()).isEqualTo("DMU-02"));
        assertThat(result.findings()).allSatisfy(finding ->
                assertThat(finding.spindle()).isEqualTo("DMU-02"));
        assertThat(result.findings())
                .noneMatch(finding -> finding.type() == AnomalyType.ELEVATED_OOT_RATE);
        // the degradation check is within-spindle, so it fires without fleet comparison too
        assertThat(result.findings())
                .anyMatch(finding -> finding.type() == AnomalyType.SPINDLE_DEGRADATION);
        assertThat(result.note()).contains("Fleet-rate comparison skipped");
    }

    @Test
    void emptyPeriodYieldsGuidingFailure() {
        LocalDate farFuture = LocalDate.now().plusYears(1);

        SpindleAnomalyAnalysisResult result =
                service.analyze(null, farFuture, farFuture.plusDays(1), 50);

        assertThat(result.success()).isFalse();
        assertThat(result.note()).contains("No measurement data");
    }

    @Test
    void summariesCarryRatesAndCapability() {
        SpindleAnomalyAnalysisResult result = service.analyze(null, null, null, 50);

        assertThat(result.spindles()).hasSize(10);
        assertThat(result.spindles()).allSatisfy(summary -> {
            assertThat(summary.reportCount()).isGreaterThan(0);
            assertThat(summary.characteristicCount()).isGreaterThan(0);
            assertThat(summary.outOfTolRatePct()).isGreaterThanOrEqualTo(BigDecimal.ZERO);
        });
        // summaries are sorted worst rate first
        for (int i = 1; i < result.spindles().size(); i++) {
            assertThat(result.spindles().get(i - 1).outOfTolRatePct())
                    .isGreaterThanOrEqualTo(result.spindles().get(i).outOfTolRatePct());
        }
    }
}
