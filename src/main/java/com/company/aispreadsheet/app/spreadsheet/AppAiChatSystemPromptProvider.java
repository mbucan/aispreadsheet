package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.aitoolsflowuidata.service.prompt.AiChatSystemPromptProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

/**
 * Replaces the add-on's default chat system prompt (registered with
 * {@code @ConditionalOnMissingBean}) with a copy extended by spreadsheet-tool orchestration
 * rules. The template is a StringTemplate: literal braces must not appear in it, and the
 * {@code responseLanguage} / {@code additionalInstructions} placeholders must be kept.
 */
@Component("app_AiChatSystemPromptProvider")
public class AppAiChatSystemPromptProvider implements AiChatSystemPromptProvider {

    @Value("classpath:com/company/aispreadsheet/app/spreadsheet/system-chat-prompt.st")
    protected Resource promptResource;

    @Override
    public Resource getResource() {
        return promptResource;
    }
}
