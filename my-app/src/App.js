import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./js/pages/Home";
import About from "./js/pages/About";
import Logement from "./js/pages/Logement";
import Error from "./js/pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/logements/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
