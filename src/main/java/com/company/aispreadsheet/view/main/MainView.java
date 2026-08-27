package com.company.aispreadsheet.view.main;

import com.company.aispreadsheet.app.SeedDataCompletedEvent;
import com.company.aispreadsheet.app.SeedDataInitializer;
import com.company.aispreadsheet.app.SeedDataProgressEvent;
import com.company.aispreadsheet.entity.User;
import com.google.common.base.Strings;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.avatar.Avatar;
import com.vaadin.flow.component.avatar.AvatarVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.shared.Registration;
import io.jmix.core.Messages;
import io.jmix.core.usersubstitution.CurrentUserSubstitution;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.app.main.StandardMainView;
import io.jmix.flowui.view.Install;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.security.core.userdetails.UserDetails;

@Route("")
@ViewController(id = "MainView")
@ViewDescriptor(path = "main-view.xml")
public class MainView extends StandardMainView {

    @Autowired
    private Messages messages;
    @Autowired
    private UiComponents uiComponents;
    @Autowired
    private CurrentUserSubstitution currentUserSubstitution;
    @Autowired
    private SeedDataInitializer seedDataInitializer;
    @Autowired
    private Notifications notifications;

    @ViewComponent
    private HorizontalLayout seedingIndicator;
    @ViewComponent
    private Span seedingLabel;
    @ViewComponent
    private ProgressBar seedingProgressBar;
    @ViewComponent
    private MessageBundle messageBundle;

    private Registration seedingPollRegistration;

    /**
     * Syncs the indicator with the seeder state AFTER the view is attached (UI event listeners
     * register on attach, so an earlier check could miss a completion arriving in between).
     * ReadyEvent re-fires on every navigation, so a stale indicator also self-heals.
     */
    @Subscribe
    public void onReady(final ReadyEvent event) {
        syncSeedingIndicator();
    }

    /** Delivered by {@code UiEventPublisher} on the UI thread while the startup seeder runs. */
    @EventListener
    public void onSeedDataProgress(final SeedDataProgressEvent event) {
        syncSeedingIndicator();
    }

    @EventListener
    public void onSeedDataCompleted(final SeedDataCompletedEvent event) {
        syncSeedingIndicator();
    }

    /**
     * Renders the indicator from the seeder's snapshot — the single source of truth for every
     * trigger (ReadyEvent, broadcast UI events, poll fallback). While seeding runs, the UI polls
     * once a second so the indicator stays live even when push/UI-event delivery is unavailable.
     * The completion notification fires exactly once: when a shown indicator transitions to hidden.
     */
    private void syncSeedingIndicator() {
        SeedDataInitializer.Progress progress = seedDataInitializer.getProgress();
        if (progress.inProgress() && progress.stage() != null) {
            seedingIndicator.setVisible(true);
            seedingLabel.setText(seedingText(
                    progress.stage(), progress.current(), progress.total(), progress.item()));
            if (progress.total() > 0) {
                seedingProgressBar.setIndeterminate(false);
                seedingProgressBar.setValue((double) progress.current() / progress.total());
            } else {
                seedingProgressBar.setIndeterminate(true);
            }
            startSeedingPolling();
        } else {
            boolean wasShown = seedingIndicator.isVisible();
            seedingIndicator.setVisible(false);
            stopSeedingPolling();
            if (wasShown && progress.total() > 0) {
                notifications.create(messageBundle.formatMessage("seeding.completed", progress.total()))
                        .withThemeVariant(NotificationVariant.LUMO_SUCCESS)
                        .withDuration(6000)
                        .show();
            }
        }
    }

    private void startSeedingPolling() {
        if (seedingPollRegistration != null) {
            return;
        }
        getUI().ifPresent(ui -> {
            ui.setPollInterval(1000);
            seedingPollRegistration = ui.addPollListener(pollEvent -> syncSeedingIndicator());
        });
    }

    private void stopSeedingPolling() {
        if (seedingPollRegistration != null) {
            seedingPollRegistration.remove();
            seedingPollRegistration = null;
            getUI().ifPresent(ui -> ui.setPollInterval(-1));
        }
    }

    private String seedingText(SeedDataProgressEvent.Stage stage, int current, int total, String item) {
        return switch (stage) {
            case SPINDLES -> messageBundle.getMessage("seeding.spindles");
            case EMPLOYEES -> messageBundle.getMessage("seeding.employees");
            case REPORTS -> item == null
                    ? messageBundle.getMessage("seeding.reports")
                    : messageBundle.formatMessage("seeding.report", current, total, item);
        };
    }

    @Install(to = "userMenu", subject = "buttonRenderer")
    private Component userMenuButtonRenderer(final UserDetails userDetails) {
        if (!(userDetails instanceof User user)) {
            return null;
        }

        String userName = generateUserName(user);

        Div content = uiComponents.create(Div.class);
        content.setClassName("user-menu-button-content");

        Avatar avatar = createAvatar(userName);

        Span name = uiComponents.create(Span.class);
        name.setText(userName);
        name.setClassName("user-menu-text");

        content.add(avatar, name);

        if (isSubstituted(user)) {
            Span subtext = uiComponents.create(Span.class);
            subtext.setText(messages.getMessage("userMenu.substituted"));
            subtext.setClassName("user-menu-subtext");

            content.add(subtext);
        }

        return content;
    }

    @Install(to = "userMenu", subject = "headerRenderer")
    private Component userMenuHeaderRenderer(final UserDetails userDetails) {
        if (!(userDetails instanceof User user)) {
            return null;
        }

        Div content = uiComponents.create(Div.class);
        content.setClassName("user-menu-header-content");

        String name = generateUserName(user);

        Avatar avatar = createAvatar(name);
        avatar.addThemeVariants(AvatarVariant.LARGE);

        Span text = uiComponents.create(Span.class);
        text.setText(name);
        text.setClassName("user-menu-text");

        content.add(avatar, text);

        if (name.equals(user.getUsername())) {
            text.addClassName("user-menu-text-subtext");
        } else {
            Span subtext = uiComponents.create(Span.class);
            subtext.setText(user.getUsername());
            subtext.setClassName("user-menu-subtext");

            content.add(subtext);
        }

        return content;
    }

    private Avatar createAvatar(String fullName) {
        Avatar avatar = uiComponents.create(Avatar.class);
        avatar.setName(fullName);
        avatar.getElement().setAttribute("tabindex", "-1");
        avatar.setClassName("user-menu-avatar");

        return avatar;
    }

    private String generateUserName(User user) {
        String userName = String.format("%s %s",
                        Strings.nullToEmpty(user.getFirstName()),
                        Strings.nullToEmpty(user.getLastName()))
                .trim();

        return userName.isEmpty() ? user.getUsername() : userName;
    }

    private boolean isSubstituted(User user) {
        UserDetails authenticatedUser = currentUserSubstitution.getAuthenticatedUser();
        return user != null && !authenticatedUser.getUsername().equals(user.getUsername());
    }
}
