import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/AdminDashboard/Dashboard';
import PrincipalDashboard from './Components/PrincipalDashboard/principalDashboard';
import TeacherDashBoard from './Components/TeacherDashBoard/teacherDashBoard';
// import MainDashboard from './Components/AdminDashboard/MainDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser(userType);
  };

  return (
    <div className="App">
      {user ? (
        user === 'admin' ? (
          <Dashboard userType={user} />
        ) : user === 'principal' ? (
          <PrincipalDashboard />
        ) : user === 'teacher' ? ( 
          <TeacherDashBoard />
        ) : (
          <Login onLogin={handleLogin} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
