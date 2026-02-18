import { useState } from "react";
import { searchEmployeeByName } from "../services/EmployeeService";

function ViewEmployee() {

  const [searchName, setSearchName] = useState("");
  const [result, setResult] = useState([]);
  const [notFound, setNotFound] = useState(false);


  //Enter Name 
  const handleSearch = () => {

    if (searchName.trim() === "") {
      alert("Please enter employee name");
      return;
    }

    searchEmployeeByName(searchName)
      .then(res => {

        if (res.data.length === 0) {
          setNotFound(true);
          setResult([]);
        } else {
          setResult(res.data);
          setNotFound(false);
        }

      })
      .catch(() => {
        alert("Error while searching");
      });
  };

  return (
    <div className="container mt-4">

      <h3>Search Employee</h3>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="form-control"
        />

        <button
          className="btn btn-primary mt-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {notFound && (
        <h5 style={{ color: "red" }}>Employee Not Found</h5>
      )}

      {result.length > 0 && (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {result.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default ViewEmployee;
