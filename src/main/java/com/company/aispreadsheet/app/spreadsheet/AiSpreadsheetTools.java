package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.aitools.tool.AiToolStatusPublisher;
import io.jmix.aitools.tool.JmixAiTool;
import io.jmix.core.Messages;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.UiEventPublisher;
import org.jspecify.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.model.ToolContext;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * AI tools that let the chat assistant create, edit, inspect and audit Excel workbooks shown
 * live in the AI Spreadsheet view.
 * <p>
 * The spreadsheet-construction and audit rules embedded in the tool descriptions are adapted
 * from the {@code xlsx-author} and {@code audit-xls} skills of the Apache-2.0 licensed
 * <a href="https://github.com/anthropics/financial-services">anthropics/financial-services</a>
 * repository.
 */
@Component("app_AiSpreadsheetTools")
public class AiSpreadsheetTools implements JmixAiTool {

    public static final String CREATE_TOOL = "app_createSpreadsheet";
    public static final String UPDATE_TOOL = "app_updateSpreadsheetCells";
    public static final String READ_TOOL = "app_readSpreadsheet";
    public static final String AUDIT_TOOL = "app_auditSpreadsheet";

    private static final Logger log = LoggerFactory.getLogger(AiSpreadsheetTools.class);

    private static final String DEFAULT_FILE_NAME = "spreadsheet.xlsx";

    private static final String STYLE_RULES = """
            STYLE TOKENS for "style": TITLE, HEADER, LABEL, ASSUMPTION, INPUT, CURRENCY_INPUT,
            PERCENT_INPUT, FORMULA, CURRENCY, PERCENT, MULTIPLE, DATE, CHECK, NOTE.
            Color coding (mandatory): hardcoded inputs and assumptions use the blue styles
            (ASSUMPTION, INPUT, CURRENCY_INPUT, PERCENT_INPUT); calculated cells use the black
            styles (FORMULA, CURRENCY, PERCENT, MULTIPLE). Cross-sheet reference formulas are
            colored green automatically. Users must see at a glance what they may edit (blue)
            versus what is computed (black).
            NUMBER FORMATS: currency "$#,##0" (decimals only when needed), percentages "0.0%"
            (values stored as fractions, 0.15 = 15%), multiples "0.0x", counts "#,##0".
            Never leave money or percent cells in General format.""";

    private static final String CREATE_DESCRIPTION = """
            Creates a new Excel workbook from a complete specification and shows it to the user
            in the spreadsheet panel of the application. Replaces the user's current workbook.

            THE SPEC MUST CONTAIN:
            - "fileName": workbook file name, e.g. "Budget2026.xlsx"
            - "sheets": array of sheets; each sheet has "name", "cells", and optional
              "merges" (e.g. ["A1:D1"]) and "columnWidths" (e.g. ["A=32","B=14"], width in characters)
            - optional "namedRanges", e.g. ["GrowthRate=Inputs!$B$2"], for key values

            EACH CELL HAS:
            - "ref": A1-style reference, e.g. "B3" (required)
            - "value": literal content AS A STRING - numbers as "1234.5", booleans as "true",
              dates in ISO format "2026-01-31". The server detects the type. Omit for formula cells.
            - "formula": Excel formula WITHOUT the leading "=", e.g. "SUM(B2:B10)". A cell has
              either "value" or "formula", never both.
            - optional "style": one of the style tokens below
            - optional "numberFormat": Excel format string overriding the style default

            SPREADSHEET CONSTRUCTION RULES (follow strictly):
            1. EVERY CALCULATION CELL IS A FORMULA; EVERY HARDCODED VALUE LIVES ON AN INPUTS TAB.
               Any cell derivable from other cells MUST be a formula referencing cells, never a
               precomputed number. For models, create a dedicated "Inputs" sheet holding all
               hardcoded values in labeled cells, and reference them cross-sheet (e.g. Inputs!B2).
               WRONG: "formula": "B5*1.05"  (what is 1.05?)
               RIGHT: label "Growth rate" next to Inputs!B2 = 0.05 styled PERCENT_INPUT,
               then "formula": "B5*(1+Inputs!$B$2)".
            2. ADD A "Checks" SHEET for any model: TRUE/FALSE formulas validating key
               relationships (totals reconcile, balance sheet balances), styled CHECK.
            3. STRUCTURE: title in A1 (TITLE), column headers styled HEADER, row labels LABEL,
               units in headers ("Revenue ($k)"). Use absolute references ($B$2) for shared inputs.
            4. FORMULA COMPATIBILITY: use widely supported functions (SUM, AVERAGE, IF, ROUND,
               MIN, MAX, COUNT, COUNTIF, SUMIF, VLOOKUP, INDEX, MATCH, NPV, IRR). Avoid XLOOKUP,
               LET, LAMBDA and dynamic array functions - they cannot be verified here.
            """ + STYLE_RULES + """

            THE RESULT reports "formulaIssues" - cells whose formulas failed verification
            (#REF!, #NAME?, #DIV/0!, unsupported function). If any are reported you MUST fix
            them with app_updateSpreadsheetCells. After creating or substantially changing a
            workbook, run app_auditSpreadsheet and fix CRITICAL findings before telling the
            user you are done. Report at most a one-line summary to the user; never paste the
            raw spec or result JSON.""";

    private static final String UPDATE_DESCRIPTION = """
            Applies targeted cell changes to the user's CURRENT workbook and refreshes the
            spreadsheet panel. Use for edits, fixes and additions; use app_createSpreadsheet
            only for a brand-new workbook. If unsure of current content, call
            app_readSpreadsheet first.

            THE REQUEST MUST CONTAIN "updates": an array where each item has:
            - "sheet": sheet name (created if it does not exist)
            - "ref": A1-style cell reference, e.g. "C7"
            - and either "value" (string literal - numbers as "1234.5", dates ISO "2026-01-31"),
              or "formula" (without leading "="), or "clear": true to blank the cell
            - optional "style" and "numberFormat" - same rules as app_createSpreadsheet:
              formulas instead of hardcoded results; hardcoded values in labeled blue input cells.
            """ + STYLE_RULES + """

            All formulas are re-verified after the change; fix any reported "formulaIssues"
            with another app_updateSpreadsheetCells call. Fails with guidance if no workbook
            exists yet.""";

    private static final String READ_DESCRIPTION = """
            Returns the full contents of the user's current workbook as text: every non-empty
            cell with its formula (if any), current evaluated value and number format, plus
            sheet names and merged ranges. Call this before editing an existing workbook,
            after fixing formula issues, or when the user asks what the spreadsheet contains.
            Returns a notice if no workbook exists yet.""";

    private static final String AUDIT_DESCRIPTION = """
            Audits the user's CURRENT workbook like a financial-model reviewer and returns
            findings with severity CRITICAL / WARNING / INFO, category, location and a
            suggested remediation. Checks performed: formula error values (#REF!, #DIV/0!,
            #NAME?, #VALUE!, #N/A), hardcoded numeric literals inside formulas, formulas that
            break the pattern of their row/column neighbors, circular references, failed
            Checks-tab validations (FALSE results), and blue-styled calculation cells.

            Run this after app_createSpreadsheet and after substantial edits. You MUST fix
            CRITICAL findings with app_updateSpreadsheetCells before telling the user the
            workbook is ready; mention remaining WARNINGs to the user in one line. This tool
            only reports - it never changes the workbook.""";

    private final SpreadsheetBuilderService builderService;
    private final SpreadsheetAuditService auditService;
    private final AiWorkbookStore workbookStore;
    private final AiToolStatusPublisher toolStatusPublisher;
    private final UiEventPublisher uiEventPublisher;
    private final CurrentAuthentication currentAuthentication;
    private final Messages messages;

    public AiSpreadsheetTools(SpreadsheetBuilderService builderService,
                              SpreadsheetAuditService auditService,
                              AiWorkbookStore workbookStore,
                              AiToolStatusPublisher toolStatusPublisher,
                              UiEventPublisher uiEventPublisher,
                              CurrentAuthentication currentAuthentication,
                              Messages messages) {
        this.builderService = builderService;
        this.auditService = auditService;
        this.workbookStore = workbookStore;
        this.toolStatusPublisher = toolStatusPublisher;
        this.uiEventPublisher = uiEventPublisher;
        this.currentAuthentication = currentAuthentication;
        this.messages = messages;
    }

    @Tool(name = CREATE_TOOL, description = CREATE_DESCRIPTION)
    public SpreadsheetToolResult createSpreadsheet(
            @ToolParam(description = "Complete workbook specification: fileName and sheets with cells.")
            @Nullable SpreadsheetSpec spec,
            ToolContext toolContext) {
        String startStatus = message("createSpreadsheet.startStatus");
        toolStatusPublisher.update(startStatus, toolContext);

        if (spec == null || spec.getSheets().isEmpty()) {
            // A smaller model can call the tool with malformed or empty arguments. Return a
            // structured, guiding failure instead of throwing so the model can retry correctly.
            log.warn("createSpreadsheet tool called with an empty or null spec");
            toolStatusPublisher.complete(startStatus, message("createSpreadsheet.failStatus"), toolContext);
            return SpreadsheetToolResult.failure(
                    "The specification was empty. Call the tool again with a single spec object "
                            + "containing fileName and a sheets array with cells.");
        }

        String fileName = normalizeFileName(spec.getFileName());
        log.debug("LLM tool call: createSpreadsheet(fileName={}, sheets={})", fileName, spec.getSheets().size());

        BuildResult result;
        try {
            result = builderService.buildWorkbook(spec);
        } catch (SpreadsheetBuildException e) {
            toolStatusPublisher.complete(startStatus, message("createSpreadsheet.failStatus"), toolContext);
            return SpreadsheetToolResult.failure(e.getMessage());
        } catch (RuntimeException e) {
            // Publish a generic status only: the raw exception must never surface in the UI.
            log.error("Failed to build workbook for tool call", e);
            toolStatusPublisher.complete(startStatus, message("createSpreadsheet.failStatus"), toolContext);
            throw e;
        }

        storeAndPublish(fileName, result);
        toolStatusPublisher.complete(startStatus,
                messages.formatMessage(AiSpreadsheetTools.class, "createSpreadsheet.successStatus",
                        fileName, result.cellCount(), result.issues().size()),
                toolContext);
        return SpreadsheetToolResult.success(fileName, result.cellCount(), result.issues(),
                result.issues().isEmpty()
                        ? "Workbook created and shown to the user."
                        : "Workbook created and shown to the user, but some cells have issues - fix them.");
    }

    @Tool(name = UPDATE_TOOL, description = UPDATE_DESCRIPTION)
    public SpreadsheetToolResult updateSpreadsheetCells(
            @ToolParam(description = "Cell changes to apply to the current workbook.")
            @Nullable CellUpdateRequest request,
            ToolContext toolContext) {
        String startStatus = message("updateSpreadsheetCells.startStatus");
        toolStatusPublisher.update(startStatus, toolContext);

        if (request == null || request.getUpdates().isEmpty()) {
            log.warn("updateSpreadsheetCells tool called with an empty or null request");
            toolStatusPublisher.complete(startStatus, message("updateSpreadsheetCells.failStatus"), toolContext);
            return SpreadsheetToolResult.failure(
                    "The update request was empty. Call the tool again with an updates array "
                            + "where each item has sheet, ref and value/formula/clear.");
        }
        AiWorkbookStore.WorkbookState state = workbookStore.get(currentUsername());
        if (state == null) {
            toolStatusPublisher.complete(startStatus, message("updateSpreadsheetCells.failStatus"), toolContext);
            return SpreadsheetToolResult.failure(
                    "No current workbook exists. Create one first with " + CREATE_TOOL + ".");
        }

        log.debug("LLM tool call: updateSpreadsheetCells(updates={})", request.getUpdates().size());

        BuildResult result;
        try {
            result = builderService.applyUpdates(state.bytes(), request.getUpdates());
        } catch (SpreadsheetBuildException e) {
            toolStatusPublisher.complete(startStatus, message("updateSpreadsheetCells.failStatus"), toolContext);
            return SpreadsheetToolResult.failure(e.getMessage());
        } catch (RuntimeException e) {
            log.error("Failed to update workbook for tool call", e);
            toolStatusPublisher.complete(startStatus, message("updateSpreadsheetCells.failStatus"), toolContext);
            throw e;
        }

        storeAndPublish(state.fileName(), result);
        toolStatusPublisher.complete(startStatus,
                messages.formatMessage(AiSpreadsheetTools.class, "updateSpreadsheetCells.successStatus",
                        result.cellCount(), result.issues().size()),
                toolContext);
        return SpreadsheetToolResult.success(state.fileName(), result.cellCount(), result.issues(),
                result.issues().isEmpty()
                        ? "Workbook updated and refreshed for the user."
                        : "Workbook updated, but some cells have issues - fix them.");
    }

    @Tool(name = READ_TOOL, description = READ_DESCRIPTION)
    public String readSpreadsheet(ToolContext toolContext) {
        String startStatus = message("readSpreadsheet.startStatus");
        toolStatusPublisher.update(startStatus, toolContext);

        AiWorkbookStore.WorkbookState state = workbookStore.get(currentUsername());
        if (state == null) {
            toolStatusPublisher.complete(startStatus, message("readSpreadsheet.emptyStatus"), toolContext);
            return "No workbook exists yet. Create one with " + CREATE_TOOL + ".";
        }
        try {
            String description = builderService.describeWorkbook(state.bytes());
            toolStatusPublisher.complete(startStatus, state.fileName(), toolContext);
            return "Current workbook \"" + state.fileName() + "\":\n" + description;
        } catch (RuntimeException e) {
            log.error("Failed to describe workbook for tool call", e);
            toolStatusPublisher.complete(startStatus, message("readSpreadsheet.failStatus"), toolContext);
            throw e;
        }
    }

    @Tool(name = AUDIT_TOOL, description = AUDIT_DESCRIPTION)
    public AuditReport auditSpreadsheet(ToolContext toolContext) {
        String startStatus = message("auditSpreadsheet.startStatus");
        toolStatusPublisher.update(startStatus, toolContext);

        AiWorkbookStore.WorkbookState state = workbookStore.get(currentUsername());
        if (state == null) {
            toolStatusPublisher.complete(startStatus, message("readSpreadsheet.emptyStatus"), toolContext);
            return new AuditReport("No workbook exists yet. Create one with " + CREATE_TOOL + ".",
                    java.util.List.of());
        }
        try {
            AuditReport report = auditService.audit(state.bytes());
            toolStatusPublisher.complete(startStatus, report.summary(), toolContext);
            return report;
        } catch (RuntimeException e) {
            log.error("Failed to audit workbook for tool call", e);
            toolStatusPublisher.complete(startStatus, message("auditSpreadsheet.failStatus"), toolContext);
            throw e;
        }
    }

    private void storeAndPublish(String fileName, BuildResult result) {
        String username = currentUsername();
        workbookStore.put(username, fileName, result.bytes(), result.issues());
        try {
            uiEventPublisher.publishEventForUsers(
                    new SpreadsheetReadyEvent(this, fileName, result.bytes(), result.issues()),
                    Set.of(username));
        } catch (RuntimeException e) {
            // The workbook is stored either way; a UI notification problem must not fail the tool.
            log.warn("Could not publish spreadsheet UI refresh event", e);
        }
    }

    private String currentUsername() {
        return currentAuthentication.getUser().getUsername();
    }

    private String normalizeFileName(@Nullable String fileName) {
        if (fileName == null || fileName.isBlank()) {
            return DEFAULT_FILE_NAME;
        }
        String clean = fileName.trim().replaceAll("[\\\\/:*?\"<>|]", "_");
        return clean.toLowerCase().endsWith(".xlsx") ? clean : clean + ".xlsx";
    }

    private String message(String key) {
        return messages.getMessage(AiSpreadsheetTools.class, key);
    }
}
