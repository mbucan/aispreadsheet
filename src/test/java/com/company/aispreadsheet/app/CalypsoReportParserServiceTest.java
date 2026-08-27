package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.CharacteristicType;
import com.company.aispreadsheet.entity.ReportResult;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * Pure parser test — no Spring context. Uses the synthetic Calypso sample files
 * in src/test/resources/calypso.
 */
class CalypsoReportParserServiceTest {

    private final CalypsoReportParserService parser = new CalypsoReportParserServiceImpl();

    private InputStream resource(String name) {
        return Objects.requireNonNull(
                getClass().getResourceAsStream("/calypso/" + name),
                "missing test resource " + name);
    }

    @Test
    void parsesSample1HeaderAndRows() {
        ParsedReport report = parser.parse(resource("sample1.csv"), "sample1.csv");

        assertThat(report.planName()).isEqualTo("BLD-114_OP60_FINAL");
        assertThat(report.calypsoVersion()).isEqualTo("7.6.10");
        assertThat(report.partName()).isEqualTo("Compressor Blade Stage 1");
        assertThat(report.drawingNo()).isEqualTo("DRG-88231-C");
        assertThat(report.partId()).isEqualTo("BLD-114-0042");
        assertThat(report.batch()).isEqualTo("B-2231");
        assertThat(report.worksOrder()).isEqualTo("WO-55871");
        assertThat(report.operation()).isEqualTo("OP-060 Final Milling");
        assertThat(report.machineIdRaw()).isEqualTo("DMU-03");
        assertThat(report.millOperatorRaw()).isEqualTo("S.Davies");
        assertThat(report.millShift()).isEqualTo("Early (06:00-14:00)");
        assertThat(report.inspectorRaw()).isEqualTo("E.Bennett");
        assertThat(report.cmmName()).isEqualTo("Zeiss PRISMO Navigator 9/15/7");
        assertThat(report.measurementDateTime())
                .isEqualTo(LocalDateTime.of(2026, 7, 10, 14, 32, 5));
        assertThat(report.temperature()).isEqualTo("20.1 C");
        assertThat(report.probe()).isEqualTo("VAST XT gold, 3mm ruby");
        assertThat(report.soakStart())
                .isEqualTo(LocalDateTime.of(2026, 7, 10, 9, 15, 0));
        assertThat(report.partTempAtStart()).isEqualTo("20.3 C");
        assertThat(report.alignment()).isEqualTo("Datum A-B-C (3-2-1) blade root");
        assertThat(report.inputSource()).isEqualTo("DMIS program BLD114_OP60 rev 12");

        assertThat(report.characteristics()).hasSize(61);
        assertThat(report.characteristics().stream()
                .filter(ParsedCharacteristic::outOfTol).count()).isEqualTo(2);

        assertThat(report.characteristicsTotal()).isEqualTo(61);
        assertThat(report.characteristicsInTol()).isEqualTo(59);
        assertThat(report.characteristicsOutOfTol()).isEqualTo(2);
        assertThat(report.result()).isEqualTo(ReportResult.REWORK_CONCESSION);
        assertThat(report.dispositionRoute())
                .isEqualTo("MRB review - raise concession C-2231-08");
        assertThat(report.sourceFileName()).isEqualTo("sample1.csv");
    }

    @Test
    void parsesSample1SpecificRows() {
        ParsedReport report = parser.parse(resource("sample1.csv"), "sample1.csv");

        ParsedCharacteristic flankAngle = report.characteristics().get(0);
        assertThat(flankAngle.name()).isEqualTo("Dovetail_FlankAngle_L");
        assertThat(flankAngle.type()).isEqualTo(CharacteristicType.ANGLE);
        assertThat(flankAngle.nominal()).isEqualByComparingTo("65.0000");
        assertThat(flankAngle.actual()).isEqualByComparingTo("65.0018");
        assertThat(flankAngle.deviation()).isEqualByComparingTo("0.0018");
        assertThat(flankAngle.tolMinus()).isEqualByComparingTo("-0.1000");
        assertThat(flankAngle.tolPlus()).isEqualByComparingTo("0.1000");
        assertThat(flankAngle.outOfTol()).isFalse();

        // Unknown characteristic type token must not fail the parse: enum null, raw kept
        ParsedCharacteristic unknownType = report.characteristics().stream()
                .filter(c -> c.name().equals("Shroud_Runout"))
                .findFirst().orElseThrow();
        assertThat(unknownType.type()).isNull();
        assertThat(unknownType.typeRaw()).isEqualTo("Cylindricity");

        // Row with a trailing extra semicolon parses normally
        ParsedCharacteristic trailing = report.characteristics().stream()
                .filter(c -> c.name().equals("LE_Radius"))
                .findFirst().orElseThrow();
        assertThat(trailing.nominal()).isEqualByComparingTo("1.2500");
        assertThat(trailing.outOfTol()).isFalse();

        // Out-of-tol rows carry the flag
        assertThat(report.characteristics().stream()
                .filter(ParsedCharacteristic::outOfTol)
                .map(ParsedCharacteristic::name))
                .containsExactlyInAnyOrder("Root_Flatness", "Aerofoil_ProfilePoint_P17");
    }

    @Test
    void parsesSample2WithBom() {
        ParsedReport report = parser.parse(resource("sample2.csv"), "sample2.csv");

        // sample2.csv starts with a UTF-8 BOM; the first header key must still resolve
        assertThat(report.planName()).isEqualTo("BLD-114_OP60_FINAL");
        assertThat(report.partId()).isEqualTo("BLD-114-0057");
        assertThat(report.machineIdRaw()).isEqualTo("DMU-07");
        assertThat(report.millOperatorRaw()).isEqualTo("J.Barnes");
        assertThat(report.inspectorRaw()).isEqualTo("D.Hughes");
        assertThat(report.characteristics()).hasSize(30);
        assertThat(report.characteristicsOutOfTol()).isEqualTo(1);
        assertThat(report.result()).isEqualTo(ReportResult.REWORK_CONCESSION);
        assertThat(report.characteristics().stream()
                .filter(ParsedCharacteristic::outOfTol)
                .map(ParsedCharacteristic::name))
                .containsExactly("CoolingHole_Dia_01");
    }

    @Test
    void missingSummaryComputesTotalsAndUnknownResult() {
        ParsedReport report = parser.parse(
                resource("sample2-missing-summary.csv"), "sample2-missing-summary.csv");

        assertThat(report.characteristicsTotal()).isEqualTo(30);
        assertThat(report.characteristicsInTol()).isEqualTo(29);
        assertThat(report.characteristicsOutOfTol()).isEqualTo(1);
        assertThat(report.result()).isEqualTo(ReportResult.UNKNOWN);
        assertThat(report.warnings()).anyMatch(w -> w.contains("Summary block missing"));
    }

    @Test
    void missingPartIdThrows() {
        String content = """
                Plan;X;Calypso Version;1.0
                Characteristic;Type;Nominal;Actual;Deviation;Tol-;Tol+;OutOfTol
                A;Angle;1.0;1.0;0.0;-0.1;0.1;
                """;
        assertThatThrownBy(() -> parser.parse(
                new ByteArrayInputStream(content.getBytes(StandardCharsets.UTF_8)), "x.csv"))
                .isInstanceOf(CalypsoParseException.class)
                .hasMessageContaining("Part ID");
    }

    @Test
    void zeroCharacteristicRowsThrows() {
        String content = """
                Plan;X;Part ID;P-1
                Characteristic;Type;Nominal;Actual;Deviation;Tol-;Tol+;OutOfTol
                """;
        assertThatThrownBy(() -> parser.parse(
                new ByteArrayInputStream(content.getBytes(StandardCharsets.UTF_8)), "x.csv"))
                .isInstanceOf(CalypsoParseException.class)
                .hasMessageContaining("no characteristic rows");
    }

    @Test
    void unknownResultValueBecomesUnknownWithWarning() {
        String content = """
                Part ID;P-2;Date;2026-01-05
                Time;08:00:00
                Characteristic;Type;Nominal;Actual;Deviation;Tol-;Tol+;OutOfTol
                A;Angle;1.0;1.0;0.0;-0.1;0.1;

                Summary
                Result;SOMETHING ELSE
                """;
        ParsedReport report = parser.parse(
                new ByteArrayInputStream(content.getBytes(StandardCharsets.UTF_8)), "x.csv");
        assertThat(report.result()).isEqualTo(ReportResult.UNKNOWN);
        assertThat(report.warnings()).anyMatch(w -> w.contains("Unknown Result value"));
        assertThat(report.measurementDateTime())
                .isEqualTo(LocalDateTime.of(2026, 1, 5, 8, 0, 0));
    }
}
