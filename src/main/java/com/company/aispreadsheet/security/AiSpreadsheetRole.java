package com.company.aispreadsheet.security;

import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

/**
 * Grants access to the AI Spreadsheet workspace view. The workbook lives in memory and file
 * storage, so no entity policies are required here — but users additionally need the add-on's
 * {@code AiToolsChatUserRole} (code {@code aitools-chat-user}) for the chat conversation
 * entities; assign both roles together.
 */
@ResourceRole(name = "AI Spreadsheet", code = AiSpreadsheetRole.CODE)
public interface AiSpreadsheetRole {

    String CODE = "ai-spreadsheet";

    @ViewPolicy(viewIds = {"AiSpreadsheetView"})
    @MenuPolicy(menuIds = {"AiSpreadsheetView"})
    void aiSpreadsheetScreens();
}
