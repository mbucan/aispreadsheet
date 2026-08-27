package com.company.aispreadsheet.view.vaadinspreadsheetdemo;

import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "spreadsheet-demo/formulas", layout = MainView.class)
@ViewController(id = "SpreadsheetFormulasView")
@ViewDescriptor(path = "spreadsheet-formulas-view.xml")
public class SpreadsheetFormulasView extends StandardView {

    @ViewComponent
    private Spreadsheet demoSpreadsheet;

    @Subscribe
    public void onInit(final InitEvent event) {
        TestSheets.read(demoSpreadsheet, "Formulas.xlsx");
    }
}
