import React from 'react';
import logo from '../assets/logos/logo.png';
import '../styles/Landing.css'; // Assuming you want to separate styles into a CSS file

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <img src="https://picsum.photos/1920/1080" alt="Hero" className="landing-heroImage" />
      </div>
      <div className="landing-content">
        <img src={logo} alt="Logo" className="landing-logo" />
        <h1 className="landing-heading">Welcome to Ledger Accounting</h1>
        <p className="landing-subheading">Start managing your finances with ease.</p>
        <div className="landing-buttonContainer">
          <button className="landing-button landing-demoButton">See Demo</button>
          <button className="landing-button landing-startButton">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
