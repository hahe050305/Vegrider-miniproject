import React, { useState } from 'react';
import './signup.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle signup request
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();

      if (response.ok) {
        setSuccess('Registration successful!! Redirecting to login...');
        setError('');
        setUsername('');
        setPassword('');

        setTimeout(() => {
          window.location.href = '/login'; 
        }, 2000);
      } else {
        setError(data || 'Registration failed');
        setSuccess('');
      }
    } catch (error) {
      setError('An error occurred during registration');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
