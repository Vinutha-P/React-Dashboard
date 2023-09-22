import React, { useState } from 'react';
import './Login.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (role === 'admin' && username === 'admin@gmail.com' && password === 'qwerty') {
      onLogin('admin');
    } else if (role === 'principal' && username === 'princi@gmail.com' && password === 'qwerty') {
      onLogin('principal');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>Login</h1>
        <div className="error-message">{errorMessage}</div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="principal"
              checked={role === 'principal'}
              onChange={() => setRole('principal')}
            />
            Principal
          </label>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
