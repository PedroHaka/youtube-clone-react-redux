import React from 'react';
import { useState } from "react";
import './_app.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/loginScreen/LoginScreen';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';




const Layout = ({ children }) => {
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
                <Container className='app__main'>
                    {children}
                </Container>
            </div>

        </>
    )
}

const App = () => {
//I was using react-router-dom v5, but React 18 won't support it anymore, 
//due to memory handling incompatibility, so I have to learn RRD v6 =).
//EDIT: Learned the damn thing! Switch is now replaced with 'Routes'.
//And using elements in each 'Route' is encouraged, rather than using Components.
//So now it's working! Yay!! =) v6 is actually AWESOME, much less verbose S2.
//This is not ready, because Authentication and Firebase integration will require
//changes in the routing used here, so more editing in the future.

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout><HomeScreen /></Layout>} />
                <Route path='/auth' element={<LoginScreen />} />
                <Route path='/search' element={<Layout><h1>Search Me!</h1></Layout>} />
                <Route path='/*'element={<Navigate to="/" replace={true} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;