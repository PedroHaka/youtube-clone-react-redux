import React from 'react';
import { useState } from "react";
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import './_app.scss'

const App = () => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
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

        </>
    )
}

export default App;