import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/AdminDashboard/Dashboard';
import PrincipalDashboard from './Components/PrincipalDashboard/principalDashboard';

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
        ) : (
          <PrincipalDashboard />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
