import React from 'react';
import { useState } from "react";
import './_app.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/loginScreen/LoginScreen';


const App = () => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        /* <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar 
                    sidebar={sidebar} 
                    handleToggleSidebar={handleToggleSidebar} 
                />
                <Container fluid className='app__main'>
                    <HomeScreen />
                </Container>
            </div>

        </> */
        
        <LoginScreen />
        
    )
}

export default App;