import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
   
      <div style={styles.card}>
        <h2 style={styles.title}>LOGIN</h2>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input} 
            maxLength={254}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input} 
            minLength={8}
            maxLength={64}
            autoComplete="current-password"
            required 
          />
          
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>

        <div style={styles.footer}>
          <a href="#forgot" style={styles.link}>Forgot password?</a>
          <span style={{ color: '#070404' }}> | </span>
          <a href="#signup" style={styles.link}>Create account</a>
        </div>
      </div>
   
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '20px', // Extra curvy corners
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '12px', // Curvy input boxes
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    backgroundColor: '#fff',
    color: 'black',
  },
  button: {
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#007bff', // The blue button
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 5px',
  }
};

export default LoginPage;