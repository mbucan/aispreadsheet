package com.company.aispreadsheet.view.bladeworkshop.spindle;

import com.company.aispreadsheet.entity.Spindle;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.LookupComponent;
import io.jmix.flowui.view.StandardListView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "spindles", layout = MainView.class)
@ViewController(id = "Spindle.list")
@ViewDescriptor(path = "spindle-list-view.xml")
@LookupComponent("spindlesDataGrid")
@DialogMode(width = "50em")
public class SpindleListView extends StandardListView<Spindle> {
}
