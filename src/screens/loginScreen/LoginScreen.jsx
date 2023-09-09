import React from 'react';
import './_loginScreen.scss';

const LoginScreen = () => {
  return (
    <div className="login">
        <div className="login__container">
            <h3>BluTube</h3>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="BluTube Logo" />
            <button>Login with Google</button>
            <p>This project uses YouTube Data API</p>
        </div>
    </div>
  )
}

export default LoginScreen;