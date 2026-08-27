package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.ReportResult;
import org.springframework.lang.Nullable;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Pure parsing result of one Calypso table file — mirrors MeasurementReport
 * fields but carries no persistence concerns. Traceability values are the
 * verbatim file strings; association resolution happens in the import service.
 */
public record ParsedReport(
        @Nullable String planName,
        @Nullable String calypsoVersion,
        @Nullable String partName,
        @Nullable String drawingNo,
        String partId,
        @Nullable String batch,
        @Nullable String worksOrder,
        @Nullable String operation,
        @Nullable String machineIdRaw,
        @Nullable String millOperatorRaw,
        @Nullable String millShift,
        @Nullable String inspectorRaw,
        @Nullable String cmmName,
        @Nullable LocalDateTime measurementDateTime,
        @Nullable String temperature,
        @Nullable String probe,
        @Nullable LocalDateTime soakStart,
        @Nullable String partTempAtStart,
        @Nullable String alignment,
        @Nullable String inputSource,
        @Nullable Integer characteristicsTotal,
        @Nullable Integer characteristicsInTol,
        @Nullable Integer characteristicsOutOfTol,
        ReportResult result,
        @Nullable String dispositionRoute,
        String sourceFileName,
        List<ParsedCharacteristic> characteristics,
        List<String> warnings) {
}
