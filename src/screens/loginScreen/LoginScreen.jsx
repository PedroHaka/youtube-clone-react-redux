import React from 'react';
import './_loginScreen.scss';
import { useDispatch } from 'react-redux';
import login from '../../redux/actions/auth.action';

const LoginScreen = () => {

const dispatch = useDispatch();

const handleLogin = () => {
  
  dispatch(login);
  console.log("button pressed");
}

  return (
    <div className="login">
        <div className="login__container">
            <h3>BluTube</h3>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="BluTube Logo" />
            <button onClick={handleLogin}>Login with Google</button>
            <p>This project uses YouTube Data API</p>
        </div>
    </div>
  )
}

export default LoginScreen;