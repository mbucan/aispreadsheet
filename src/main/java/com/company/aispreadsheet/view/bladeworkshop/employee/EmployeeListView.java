package com.company.aispreadsheet.view.bladeworkshop.employee;

import com.company.aispreadsheet.entity.Employee;
import com.company.aispreadsheet.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.LookupComponent;
import io.jmix.flowui.view.StandardListView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "employees", layout = MainView.class)
@ViewController(id = "Employee.list")
@ViewDescriptor(path = "employee-list-view.xml")
@LookupComponent("employeesDataGrid")
@DialogMode(width = "64em")
public class EmployeeListView extends StandardListView<Employee> {
}
