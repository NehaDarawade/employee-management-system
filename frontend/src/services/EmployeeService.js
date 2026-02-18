import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

//View Employee Details
export const getEmployee = () => axios.get(API_URL);

//Add Employee Deyails
export const addEmployee = (emp) => {return axios.post(API_URL, emp);};

//Update Employee Details
export const updateEmployee = (id, emp)=>{
  return axios.put(`${API_URL}/${id}`, emp);
};

//Delete Employee Details
export const deleteEmployee = (id) =>axios.delete(`${API_URL}/${id}`);

//Get Employee By Id
export const getEmployeeById = (id) => {return axios.get(`${API_URL}/${id}`);};

//Search Employee By Name
export const searchEmployeeByName = (name) => {
  return axios.get(`${API_URL}/search?name=${name}`);
};