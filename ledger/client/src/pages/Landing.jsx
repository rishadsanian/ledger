import React from 'react';
import logo from '../assets/logos/logo.png'; // Import your logo image

const Landing = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <img src="https://picsum.photos/1920/1080" alt="Hero" style={styles.heroImage} />
      </div>
      <div style={styles.content}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.heading}>Welcome to Ledger Accounting App</h1>
        <p style={styles.subheading}>Start managing your finances with ease.</p>
        <div style={styles.buttonContainer}>
          <button style={{ ...styles.button, ...styles.demoButton }}>See Demo</button>
          <button style={{ ...styles.button, ...styles.startButton }}>Get Started</button>
        </div>
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
  hero: {
    width: '100%',
    height: '50vh',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    marginTop: '-100px', // Move content up to overlap hero image
    zIndex: 1,
    textAlign: 'center',
  },
  logo: {
    width: '150px',
    marginBottom: '1.5rem',
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
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  demoButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  startButton: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
};

export default Landing;
