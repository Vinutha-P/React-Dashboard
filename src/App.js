import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/AdminDashboard/Dashboard";
import PrincipalDashboard from "./Components/PrincipalDashboard/principalDashboard";
import TeacherDashBoard from "./Components/TeacherDashBoard/teacherDashBoard";
import AdminTeacherDashboard from "./Components/AdminDashboard/AdminTeacherDashboard";
import MainDashboard from "./Components/AdminDashboard/MainDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser(userType);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ==="admin" ? (<MainDashboard userType={user} />): user === "principal" ? (
                <PrincipalDashboard />
              ) : user === "teacher" ? (
                <TeacherDashBoard />
              ) : <Login onLogin={handleLogin} />} />
          <Route path="/admin-principal-dashboard" element={<PrincipalDashboard />} />
          <Route path="/admin-teacher-dashboard" element={<AdminTeacherDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/main-dashboard" element={<MainDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
