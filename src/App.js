import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './Main.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    Aos.init({
        duration: 2500,
        delay: 400,
    });
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    )
};

export default App;
