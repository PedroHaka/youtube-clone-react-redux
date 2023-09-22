import React, { useEffect } from 'react';
import './_loginScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login());
    console.log("button pressed");
  }

  const navigate = useNavigate()

  // useEffect hook based on accessToken changes.
  // Here we redirect user to Homescreen if 'accessToken !== null'
  // In other words, if the user is authenticated, we redirect to Homescreeen.
  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }

  }, [accessToken, navigate]
  )

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