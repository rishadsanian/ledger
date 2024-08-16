import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useUser } from '../context/UserContext';

const GoogleLoginButton = () => {
  const { setUser } = useUser();

  const handleGoogleSuccess = (response) => {
    console.log(response);
    // Handle successful login with Google
    // You can get user info from response.profileObj
    setUser(response.profileObj);
    
  };

  const handleGoogleFailure = (response) => {
    console.log(response);
    // Handle failed login with Google
  };

  return (
    <div className="google-login-container">
      <GoogleLogin
        clientId="287729981594-6okk6burdte9ofqmjvdbvsecfo31stki.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginButton;
