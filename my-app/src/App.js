import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './js/pages/Home';
import Logement from './js/pages/Logement';
import Error from './js/pages/Error';
import About from './js/pages/About';




const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/logement' element={<Logement />} />
                <Route path='/error' element={<Error />}  />
                <Route path='about' element={<About />} />



            </Routes>
        </BrowserRouter>
    );
};

export default App;