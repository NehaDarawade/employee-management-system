package com.example.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee.entity.Employee;
import com.example.employee.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    //Save Employee Details
    public Employee saveEmployee(Employee emp) {
        return employeeRepository.save(emp);
    }

    //View Employee List
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    
// // Get By Id
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee Not Found"));
    }
    
    
 // Update Logic
    public Employee updateEmployee(Long id, Employee emp) {

        Employee existing = employeeRepository.findById(id).orElseThrow();

        existing.setName(emp.getName());
        existing.setEmail(emp.getEmail());
        existing.setDepartment(emp.getDepartment());
        existing.setSalary(emp.getSalary());

        return employeeRepository.save(existing); // UPDATE
    }



 // Delete
    public void deleteEmployee(Long id) {
        Employee emp = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee Not Found"));

        employeeRepository.delete(emp);
    }
    
    //Search Employee by name
    public List<Employee> searchEmployeeByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }

}
