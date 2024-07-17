import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

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
    } else {
      // Login logic
    }
  };

  return (
    <div>
      <h1>{isCreatingAccount ? 'Create Account' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">{isCreatingAccount ? 'Create Account' : 'Login'}</button>
      </form>
      <p>
        {isCreatingAccount ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
          {isCreatingAccount ? 'Login' : 'Create Account'}
        </button>
      </p>
    </div>
  );
};

export default Login;