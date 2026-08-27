package com.company.aispreadsheet.app.analysis;

import com.company.aispreadsheet.test_support.AuthenticatedAsAdmin;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Integration test for the analysis AI tool: request validation with guiding failures and
 * the happy path. A null ToolContext is a supported no-op for the status publisher.
 */
@SpringBootTest
@ExtendWith(AuthenticatedAsAdmin.class)
@ActiveProfiles("test")
class SpindleAnalysisToolsTest {

    @Autowired
    SpindleAnalysisTools tools;

    @Test
    void nullRequestAnalyzesWholeFleet() {
        SpindleAnomalyAnalysisResult result = tools.analyzeSpindleAnomalies(null, null);

        assertThat(result.success()).isTrue();
        assertThat(result.spindleCount()).isEqualTo(10);
        assertThat(result.findings()).isNotEmpty();
    }

    @Test
    void unknownSpindleReturnsGuidanceListingAvailableOnes() {
        AnalyzeSpindleRequest request = new AnalyzeSpindleRequest();
        request.setSpindle("NO-SUCH-SPINDLE");

        SpindleAnomalyAnalysisResult result = tools.analyzeSpindleAnomalies(request, null);

        assertThat(result.success()).isFalse();
        assertThat(result.note()).contains("Unknown spindle");
        assertThat(result.note()).contains("DMU-01");
    }

    @Test
    void invalidDateReturnsGuidingFailure() {
        AnalyzeSpindleRequest request = new AnalyzeSpindleRequest();
        request.setFromDate("last week");

        SpindleAnomalyAnalysisResult result = tools.analyzeSpindleAnomalies(request, null);

        assertThat(result.success()).isFalse();
        assertThat(result.note()).contains("ISO format");
    }

    @Test
    void reversedDateRangeReturnsGuidingFailure() {
        AnalyzeSpindleRequest request = new AnalyzeSpindleRequest();
        request.setFromDate("2026-08-24");
        request.setToDate("2026-08-01");

        SpindleAnomalyAnalysisResult result = tools.analyzeSpindleAnomalies(request, null);

        assertThat(result.success()).isFalse();
        assertThat(result.note()).contains("swap or fix");
    }

    @Test
    void scopedRequestFiltersBySpindle() {
        AnalyzeSpindleRequest request = new AnalyzeSpindleRequest();
        request.setSpindle("DMU-01");
        request.setMaxFindings(10);

        SpindleAnomalyAnalysisResult result = tools.analyzeSpindleAnomalies(request, null);

        assertThat(result.success()).isTrue();
        assertThat(result.spindleCount()).isEqualTo(1);
        assertThat(result.findings()).hasSizeLessThanOrEqualTo(10);
        assertThat(result.findings()).allSatisfy(finding ->
                assertThat(finding.spindle()).isEqualTo("DMU-01"));
    }
}
