import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './js/pages/Home';
import Navigation from './js/components/Navigation';
import Footer from './js/components/Footer';
import Collapse from './js/components/Collapse';
import Caroussel from './js/components/Caroussel';
import Card from './js/components/Card';
import Banner from './js/components/Banner';
import Test from './js/pages/Test';
import Logement from './js/pages/Logement';
import Error from './js/pages/Error';
import About from './js/pages/About';




const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/collapse' element={<Collapse />} />
                <Route path='/caroussel' element={<Caroussel />} />
                <Route path='/card' element={<Card />} />
                <Route path='/banner' element={<Banner />} />
                <Route path='/test' element={<Test />} />
                <Route path='/logement' element={<Logement />} />
                <Route path='/error' element={<Error />}  />
                <Route path='about' element={<About />} />



            </Routes>
        </BrowserRouter>
    );
};

export default App;