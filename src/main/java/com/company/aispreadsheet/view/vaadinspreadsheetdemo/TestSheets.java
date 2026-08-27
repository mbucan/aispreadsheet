package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.vaadin.flow.component.spreadsheet.Spreadsheet;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;

/**
 * Loads the bundled demo workbooks from {@code /com/company/aispreadsheet/testsheets/}
 * into a {@link Spreadsheet} component.
 */
final class TestSheets {

    private static final String BASE_PATH = "/com/company/aispreadsheet/testsheets/";

    private TestSheets() {
    }

    static void read(Spreadsheet spreadsheet, String fileName) {
        try (InputStream is = TestSheets.class.getResourceAsStream(BASE_PATH + fileName)) {
            if (is == null) {
                throw new IllegalStateException("Test sheet not found on classpath: " + fileName);
            }
            spreadsheet.read(is);
        } catch (IOException e) {
            throw new UncheckedIOException("Unable to read test sheet: " + fileName, e);
        }
    }
}
