package com.company.aispreadsheet.view.bladeworkshop.spindle;

import com.company.aispreadsheet.entity.Spindle;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.EditedEntityContainer;
import io.jmix.flowui.view.StandardDetailView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "spindles/:id", layout = MainView.class)
@ViewController(id = "Spindle.detail")
@ViewDescriptor(path = "spindle-detail-view.xml")
@EditedEntityContainer("spindleDc")
public class SpindleDetailView extends StandardDetailView<Spindle> {
}
