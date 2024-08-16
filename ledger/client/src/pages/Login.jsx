import React, { useState } from 'react';
import '../styles/Login.css';
import GoogleLoginButton from '../assets/GoogleLoginButton'; // Import the GoogleLoginButton component

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login or create account logic here
    if (isCreatingAccount) {
      // Create account logic
      // If failed, setErrorMessage('Failed to create account');
    } else {
      // Login logic
      // If failed, setErrorMessage('Failed to login');
    }
  };

  return (
    <div className="login-container">
      <h1>{isCreatingAccount ? 'Create Account' : 'Login'}</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <button type="submit" className="login-submitButton">{isCreatingAccount ? 'Create Account' : 'Login'}</button>
      </form>
      {errorMessage && <p className="login-error">{errorMessage}</p>}
      <p>
        {isCreatingAccount ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
          {isCreatingAccount ? 'Login' : 'Create Account'}
        </button>
      </p>
      <GoogleLoginButton />
    </div>
  );
};

export default LoginForm;
