package com.example.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.entity.Employee;
import com.example.employee.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    
    //Add Employee
    @PostMapping
    public Employee addEmployee(@RequestBody Employee emp) {
        return employeeService.saveEmployee(emp);
    }

    //View Employee
    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.getAllEmployees();
    }
    
    
  //Get By Id
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }
    
// // Update
//    @PutMapping("/{id}")
//    public Employee updateEmployee(
//            @PathVariable Long id,
//            @RequestBody Employee emp) {
//        return employeeService.updateEmployee(id, emp);
//    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
    	employeeService.deleteEmployee(id);
        return "Employee Deleted Successfully";
    }
    
    //Search Employee By Name
    @GetMapping("/search")
    public List<Employee> searchEmployee(@RequestParam String name) {
        return employeeService.searchEmployeeByName(name);
    }
    
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,
                                   @RequestBody Employee emp) {
        return employeeService.updateEmployee(id, emp);
    }

}

