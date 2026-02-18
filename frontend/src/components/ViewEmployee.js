import { useState, useEffect } from "react";
import { getEmployee, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ViewEmployee() {

  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = () => {
    getEmployee()
      .then(res => {
        setEmps(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      loadEmployee();
    });
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/update/${id}`);
  };

  return (
    <div className="container mt-4">
      <h3>Employee Management System</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {emps.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdate(e.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ViewEmployee;
