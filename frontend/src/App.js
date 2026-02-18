import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import SearchEmployee from "./components/SearchEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="add" element={<AddEmployee />} />
          <Route path="employees" element={<ViewEmployee />} />
          <Route path="update/:id" element={<UpdateEmployee />} />
          <Route path="search" element={<SearchEmployee />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
