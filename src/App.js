import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import PrincipalDashboard from './principalDashboard';

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
