import React from 'react';
import './_loginScreen.scss';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/actions/auth.action';

const LoginScreen = () => {

const dispatch = useDispatch();

const handleLogin = () => {
  
  dispatch(login());
  console.log("button pressed");
}

  return (
    <div className="login">
        <div className="login__container">
            <h3>BluTube</h3>
            <p>This project uses YouTube Data API</p>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="BluTube Logo" />
            <p>This project uses Google Authentication via Firebase</p>
            <button onClick={handleLogin}>Login with Google</button>
            
        </div>
    </div>
  )
}

export default LoginScreen;