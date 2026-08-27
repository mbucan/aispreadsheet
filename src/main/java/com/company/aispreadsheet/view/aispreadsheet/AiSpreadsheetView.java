package com.company.aispreadsheet.view.aispreadsheet;

import com.company.aispreadsheet.app.spreadsheet.AiWorkbookStore;
import com.company.aispreadsheet.app.spreadsheet.SpreadsheetReadyEvent;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.aitoolsflowui.service.AiConversationService;
import io.jmix.aitoolsflowui.view.chat.AiChatFragment;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.download.DownloadFormat;
import io.jmix.flowui.download.Downloader;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;

import java.io.ByteArrayInputStream;
import java.io.IOException;

/**
 * AI Spreadsheet workspace: chat with the assistant on the left, the workbook produced by the
 * spreadsheet AI tools rendered live in a Vaadin Spreadsheet on the right.
 */
@Route(value = "ai-spreadsheet", layout = MainView.class)
@ViewController(id = "AiSpreadsheetView")
@ViewDescriptor(path = "ai-spreadsheet-view.xml")
public class AiSpreadsheetView extends StandardView {

    @ViewComponent
    private AiChatFragment chatFragment;

    @ViewComponent
    private Spreadsheet aiSpreadsheet;

    @ViewComponent
    private MessageBundle messageBundle;

    @Autowired
    private AiConversationService conversationService;

    @Autowired
    private AiWorkbookStore workbookStore;

    @Autowired
    private CurrentAuthentication currentAuthentication;

    @Autowired
    private Downloader downloader;

    @Autowired
    private Notifications notifications;

    @Subscribe
    public void onInit(final InitEvent event) {
        chatFragment.setConversation(conversationService.create());
        AiWorkbookStore.WorkbookState state = workbookStore.get(currentUsername());
        if (state != null) {
            showWorkbook(state.bytes());
        }
    }

    /**
     * Delivered by {@code UiEventPublisher} when a spreadsheet tool has produced a workbook;
     * Jmix invokes this on the UI thread of every open UI of the target user.
     */
    @EventListener
    public void onSpreadsheetReady(final SpreadsheetReadyEvent event) {
        showWorkbook(event.getBytes());
        if (!event.getIssues().isEmpty()) {
            notifications.create(messageBundle.formatMessage("formulaIssues.message",
                            event.getIssues().size()))
                    .withThemeVariant(NotificationVariant.LUMO_WARNING)
                    .show();
        }
    }

    @Subscribe("downloadBtn")
    public void onDownloadBtnClick(final ClickEvent<JmixButton> event) {
        AiWorkbookStore.WorkbookState state = workbookStore.get(currentUsername());
        if (state == null) {
            notifications.create(messageBundle.getMessage("noWorkbook.message"))
                    .show();
            return;
        }
        downloader.download(state.bytes(), state.fileName(), DownloadFormat.XLSX);
    }

    @Subscribe("newConversationBtn")
    public void onNewConversationBtnClick(final ClickEvent<JmixButton> event) {
        chatFragment.setConversation(conversationService.create());
    }

    private void showWorkbook(byte[] bytes) {
        try {
            aiSpreadsheet.read(new ByteArrayInputStream(bytes));
        } catch (IOException e) {
            notifications.create(messageBundle.getMessage("workbookRender.error"))
                    .withThemeVariant(NotificationVariant.LUMO_ERROR)
                    .show();
        }
    }

    private String currentUsername() {
        return currentAuthentication.getUser().getUsername();
    }
}
