// import { Outlet, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// function DashboardLayout() {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard-container">

//       {/* Sidebar */}
//       <div className="sidebar">
//         <h3 className="logo">EMS</h3>

//         <ul className="menu">
//           <li onClick={() => navigate("/dashboard/add")}>
//             Add Employees
//           </li>
//           <li onClick={() => navigate("/dashboard/view")}>
//             View Employees
//           </li>
//           <li onClick={() => navigate("/")}>
//             Logout
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <Outlet />
//       </div>

//     </div>
//   );
// }

// export default DashboardLayout;
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "220px",
        backgroundColor: "#2f4f6f",
        color: "white",
        padding: "20px"
      }}>

        <h3>EMS Dashboard</h3>

        <div
          style={{ marginTop: "30px", cursor: "pointer" }}
          onClick={() => navigate("/dashboard/add")}
        >
          Add Employee
        </div>

        <div
          style={{ marginTop: "15px", cursor: "pointer" }}
          onClick={() => navigate("/dashboard/employees")}
        >
          View Employee
        </div>

        <div
          style={{ marginTop: "15px", cursor: "pointer" }}
          onClick={() => navigate("/dashboard/search")}
        >
          Search Employee
        </div>

        <div
          style={{ marginTop: "15px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Logout
        </div>

      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;
