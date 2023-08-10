import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import './_app.scss'

const App = () => {
    return (
        <>
            <Header />
            <div className="app__container border border-info">
                <Sidebar />
                <Container fluid className='app__main border border-warning'>
                    <HomeScreen />
                </Container>
            </div>

        </>
    )
}

export default App;