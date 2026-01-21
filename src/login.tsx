import './App.css';
import React from 'react';

const containerStyle: React.CSSProperties = {
  maxWidth: '350px',
  margin: '60px auto',
  padding: '32px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
  fontFamily: 'inherit'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginTop: '6px',
  marginBottom: '18px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem'
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  background: '#0078d4',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '10px'
};

const linkStyle: React.CSSProperties = {
  color: '#0078d4',
  textDecoration: 'none',
  fontSize: '0.97rem',
  margin: '0 6px'
};

function Login() {
  return (
    <div className="white-container">
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#0078d4' }}>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input style={inputStyle} type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input style={inputStyle} type="password" id="password" name="password" required />
          </div>
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '18px' }}>
          <a href="#" style={linkStyle}>Forgot Password?</a>
          <a href="#" style={linkStyle}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
