import React from 'react';
import logo from '../assets/logos/logo.png'; // Import your logo image

const Landing = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} /> {/* Add the logo image */}
      <h1 style={styles.heading}>Welcome to Ledger Accounting App</h1>
      <p style={styles.subheading}>Start managing your finances with ease.</p>
      <div class="flex w-full justify-center gap-4">

      <button style={styles.button}>See Demo</button>
      <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: '200px', // Adjust the width of the logo as needed
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#666',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Landing;