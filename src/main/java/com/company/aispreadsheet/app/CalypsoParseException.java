package com.company.aispreadsheet.app;

/**
 * Thrown when a Calypso file is structurally unusable: no Part ID or zero
 * characteristic rows. All lesser problems are collected as warnings on the
 * parsed DTO instead.
 */
public class CalypsoParseException extends RuntimeException {

    public CalypsoParseException(String message) {
        super(message);
    }

    public CalypsoParseException(String message, Throwable cause) {
        super(message, cause);
    }
}
