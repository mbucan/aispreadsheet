package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.test_support.AuthenticatedAsAdmin;
import io.jmix.core.DataManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * Integration test for the import pipeline: parsing, dedupe, traceability
 * resolution against the seeded master data, persistence.
 */
@SpringBootTest
@ExtendWith(AuthenticatedAsAdmin.class)
@ActiveProfiles("test")
class MeasurementImportServiceTest {

    @Autowired
    DataManager dataManager;

    @Autowired
    MeasurementImportService importService;

    private final List<MeasurementReport> createdReports = new ArrayList<>();

    /**
     * sample2.csv with a per-test unique Part ID so the persistent test database
     * never triggers the dedupe check across runs or between tests.
     */
    private byte[] sample2WithPartId(String partId) {
        try (InputStream in = Objects.requireNonNull(
                getClass().getResourceAsStream("/calypso/sample2.csv"))) {
            String content = new String(in.readAllBytes(), StandardCharsets.UTF_8);
            return content.replace("BLD-114-0057", partId).getBytes(StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private ImportResult importBytes(byte[] data, String fileName) {
        ImportResult result = importService.importFile(new ByteArrayInputStream(data), fileName);
        createdReports.add(result.report());
        return result;
    }

    @Test
    void importsSample2AndResolvesTraceability() {
        String partId = "TST-" + System.currentTimeMillis();
        ImportResult result = importBytes(sample2WithPartId(partId), "sample2.csv");

        MeasurementReport report = dataManager.load(MeasurementReport.class)
                .id(result.report().getId())
                .fetchPlan(fp -> fp.addFetchPlan("_base")
                        .add("machine", b -> b.addFetchPlan("_base"))
                        .add("millOperator", b -> b.addFetchPlan("_base"))
                        .add("inspector", b -> b.addFetchPlan("_base"))
                        .add("characteristics", b -> b.addFetchPlan("_base")))
                .one();

        assertThat(report.getPartId()).isEqualTo(partId);
        // machine resolves to the DMU-07 seed spindle
        assertThat(report.getMachine()).isNotNull();
        assertThat(report.getMachine().getNumberMark()).isEqualTo("DMU-07");
        // J.Barnes -> seed operator OP-001 James Barnes
        assertThat(report.getMillOperator()).isNotNull();
        assertThat(report.getMillOperator().getEmployeeId()).isEqualTo("OP-001");
        // D.Hughes -> seed inspector QA-001 David Hughes
        assertThat(report.getInspector()).isNotNull();
        assertThat(report.getInspector().getEmployeeId()).isEqualTo("QA-001");
        assertThat(report.getTraceabilityDiscrepancy()).isFalse();

        assertThat(report.getCharacteristicsTotal()).isEqualTo(30);
        assertThat(report.getCharacteristicsInTol()).isEqualTo(29);
        assertThat(report.getCharacteristicsOutOfTol()).isEqualTo(1);
        assertThat(report.getCharacteristics()).hasSize(30);
        assertThat(report.getSourceFile()).isNotNull();
    }

    @Test
    void duplicateImportThrows() {
        String partId = "TST-DUP-" + System.currentTimeMillis();
        byte[] data = sample2WithPartId(partId);
        importBytes(data, "sample2.csv");

        assertThatThrownBy(() ->
                importService.importFile(new ByteArrayInputStream(data), "sample2.csv"))
                .isInstanceOf(DuplicateReportException.class)
                .hasMessageContaining(partId);
    }

    @Test
    void unresolvableOperatorSetsDiscrepancyFlag() {
        String partId = "TST-DISC-" + System.currentTimeMillis();
        String content = new String(sample2WithPartId(partId), StandardCharsets.UTF_8)
                .replace("J.Barnes", "X.Nobody");
        ImportResult result = importBytes(
                content.getBytes(StandardCharsets.UTF_8), "sample2-modified.csv");

        MeasurementReport report = dataManager.load(MeasurementReport.class)
                .id(result.report().getId())
                .one();

        assertThat(report.getTraceabilityDiscrepancy()).isTrue();
        assertThat(report.getMillOperatorRaw()).isEqualTo("X.Nobody");
        assertThat(result.warnings())
                .anyMatch(w -> w.contains("X.Nobody") && w.contains("does not match"));

        MeasurementReport loadedWithOperator = dataManager.load(MeasurementReport.class)
                .id(result.report().getId())
                .fetchPlan(fp -> fp.addFetchPlan("_base")
                        .add("millOperator", b -> b.addFetchPlan("_base")))
                .one();
        assertThat(loadedWithOperator.getMillOperator()).isNull();
    }

    @AfterEach
    void tearDown() {
        createdReports.forEach(dataManager::remove);
        createdReports.clear();
    }
}
