import React, { useState } from 'react';
import Home from './Home'; // Import your Home component
 
function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [accountBlocked, setAccountBlocked] = useState(false);
 
  const handleLogin = () => {
    if (accountBlocked) {
      return; // Do nothing if the account is already blocked.
    }
 
    if (userId === 'user1' && password === 'pass1') {
      setLoggedIn(true);
    }
    else if (userId === 'user2' && password === 'pass2') {
      setLoggedIn(true);
    }
    else if (userId === 'user3' && password === 'pass3') {
      setLoggedIn(true);
    }
    else if (userId === 'user4' && password === 'pass4') {
      setLoggedIn(true);
    }
    else if (userId === 'user5' && password === 'pass5') {
      setLoggedIn(true);
    }
 
   
   
    else {
      setLoginAttempts(loginAttempts + 1);
 
      if (loginAttempts >= 5) {
        setAccountBlocked(true);
        alert('Login Attempts Limit exceeded. Account blocked.');
      } else {
        alert(`Invalid user ID or password. Please try again. Attempt ${loginAttempts + 1}`);
      }
    }
  };
 
  const centerStyle = { textAlign: 'center' };
  const h2Style = { color: 'red' };
  const inputStyle = { marginRight: '10px' };
 
  if (loggedIn) {
    return <Home />;
  } else if (accountBlocked) {
    return (
      <div>
        <h2 style={h2Style}>Login Attempts Limit Exceeded</h2>
        <p style={h2Style}>Account blocked</p>
      </div>
    );
  } else {
    return (
      <div style={centerStyle}>
        <div>
          <h2>Login Page</h2>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={inputStyle}
              disabled={accountBlocked}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              disabled={accountBlocked}
            />
          </div>
          <button onClick={handleLogin} disabled={accountBlocked}>Login</button>
        </div>
      </div>
    );
  }
}
 
export default Login;
