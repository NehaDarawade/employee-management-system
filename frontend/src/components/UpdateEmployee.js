// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

// function UpdateEmployee() {

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [emp, setEmp] = useState({
//     name: "",
//     email: "",
//     department: "",
//     salary: ""
//   });

//   useEffect(() => {
//     getEmployeeById(id).then(res => {
//       setEmp(res.data);
//     });
//   }, [id]);

//   const handleChange = (e) => {
//     setEmp({ ...emp, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     updateEmployee(id, emp).then(() => {
//       alert("Employee Updated Successfully");
//       navigate("/dashboard/employees");
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Update Employee</h3>

//       <form onSubmit={handleSubmit}>

//         <input type="text" name="name" value={emp.name} onChange={handleChange} className="form-control mb-3"
//           placeholder="Enter Name"/>

//         <input type="email" name="email" value={emp.email} onChange={handleChange} className="form-control mb-3"
//           placeholder="Enter Email"/>

//         <input type="text" name="department" value={emp.department} onChange={handleChange} className="form-control mb-3"
//           placeholder="Enter Department"/>

//         <input type="number"name="salary"value={emp.salary} onChange={handleChange}className="form-control mb-3"
//           placeholder="Enter Salary"/>

//         <button className="btn btn-success">Update</button>

//       </form>
//     </div>
//   );
// }

// export default UpdateEmployee;


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

function UpdateEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  useEffect(() => {
    getEmployeeById(id).then(res => {
      setEmp(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEmployee(id, emp).then(() => {
      alert("Employee Updated Successfully");
      navigate("/dashboard/employees");
    });
  };

  return (
    <div className="container mt-4">

      <h3>Update Employee</h3>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" value={emp.name} onChange={handleChange} className="form-control mb-3"
          placeholder="Enter Name"/>

        <input type="email" name="email" value={emp.email} onChange={handleChange} className="form-control mb-3"
          placeholder="Enter Email"/>

        <input type="text" name="department" value={emp.department} onChange={handleChange} className="form-control mb-3"
          placeholder="Enter Department"/>

        <input type="number" name="salary" value={emp.salary} onChange={handleChange} className="form-control mb-3"
          placeholder="Enter Salary"/>

        <button className="btn btn-success">Update</button>

      </form>
    </div>
  );
}

export default UpdateEmployee;
