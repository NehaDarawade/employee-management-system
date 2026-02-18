// import React,{ useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {addEmployee}from "../services/EmployeeService";
// function AddEmployee()
// {
//     const navigate = useNavigate();
//     const [emp,setEmp]=useState({
//         name:"",
//         email:"",
//         department:"",
//         salary:" "
//     });
    
//     const handleChange=(e)=>{
//         setEmp({...emp,[e.target.name]:e.target.value});
//     }

//     const save=(e)=>{
//         addEmployee(emp).then(()=>{
//             setEmp({name:"",email:"",department:"",salary:""});
//             alert("Added Succesfully................");
//         })

//     }

//   return(
//     <div className="container mt-5">
//       <div className="card shadow p-4" style={{ maxWidth: "500px", margin: "auto" }}>

//         <h3 className="text-center mb-4">Add Employee</h3>

//         <form onSubmit={save}>

//           <input type="text" name="name" value={emp.name} onChange={handleChange} className="form-control mb-3"
//             placeholder="Enter Name" required/>

//           <input type="email" name="email"value={emp.email} onChange={handleChange} className="form-control mb-3" placeholder="Enter Email"
//             required/>

//           <input type="text" name="department" value={emp.department} onChange={handleChange} className="form-control mb-3"
//             placeholder="Enter Department" required/>

//           <input type="number" name="salary" value={emp.salary} onChange={handleChange} className="form-control mb-3"
//             placeholder="Enter Salary" required/>

//           <button type="submit" className="btn btn-primary w-100">Save Employee </button>

//         </form>

//       </div>
//     </div>
//   );
// }
// export default AddEmployee;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/EmployeeService";

function AddEmployee() {

  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();   // ✅ VERY IMPORTANT

    console.log("Sending:", emp);

    addEmployee(emp)
      .then(() => {
        alert("Added Successfully");
        //navigate("/employees");   // redirect after save
      })
      .catch((error) => {
        console.error(error);
        alert("Error saving employee");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "500px", margin: "auto" }}>

        <h3 className="text-center mb-4">Add Employee</h3>

        <form onSubmit={save}>

          <input type="text" name="name"value={emp.name} onChange={handleChange} className="form-control mb-3"
            placeholder="Enter Name" required/>

          <input type="email" name="email" value={emp.email} onChange={handleChange} className="form-control mb-3"
            placeholder="Enter Email" required/>

          <input type="text" name="department" value={emp.department} onChange={handleChange} className="form-control mb-3"
            placeholder="Enter Department" required/>

          <input type="number" name="salary" value={emp.salary} onChange={handleChange} className="form-control mb-3"
            placeholder="Enter Salary" required/>

          <button type="submit" className="btn btn-primary w-100">Save Employee</button>

        </form>

      </div>
    </div>
  );
}

export default AddEmployee;
