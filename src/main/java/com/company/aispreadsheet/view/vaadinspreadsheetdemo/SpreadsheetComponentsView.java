package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.core.metamodel.datatype.DatatypeRegistry;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.view.MessageBundle;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import org.springframework.beans.factory.annotation.Autowired;

@Route(value = "spreadsheet-demo/components", layout = MainView.class)
@ViewController(id = "SpreadsheetComponentsView")
@ViewDescriptor(path = "spreadsheet-components-view.xml")
public class SpreadsheetComponentsView extends StandardView {

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @ViewComponent
    private MessageBundle messageBundle;

    @Autowired
    private UiComponents uiComponents;

    @Autowired
    private Notifications notifications;

    @Autowired
    private DatatypeRegistry datatypeRegistry;

    @Subscribe
    public void onInit(final InitEvent event) {
        DemoComponentFactory factory = new DemoComponentFactory(
                demoSpreadsheet, uiComponents, notifications, messageBundle, datatypeRegistry);
        demoSpreadsheet.setWorkbook(factory.getTestWorkbook());
        demoSpreadsheet.setSpreadsheetComponentFactory(factory);
    }
}
