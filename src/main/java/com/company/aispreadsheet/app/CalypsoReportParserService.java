package com.company.aispreadsheet.app;

import java.io.InputStream;

/**
 * Parses Zeiss Calypso CMM table output files (semicolon-delimited: header
 * block, characteristic table, summary block) into a plain DTO. Parsing is
 * pure — no persistence.
 */
public interface CalypsoReportParserService {

    /**
     * @throws CalypsoParseException when the file has no Part ID or zero
     *         characteristic rows; all lesser problems become warnings on the DTO
     */
    ParsedReport parse(InputStream in, String fileName);
}
