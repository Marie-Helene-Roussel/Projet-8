import React from 'react';
import logo from "../../../src/logo/LOGO.png";
import { NavLink } from 'react-router-dom';

// composant pour la navigation, les éléments accueil et à propos.
const Navigation = () => {
    return (
       <nav>
        <div className='logo'>
        <img src={logo} alt="Logo de Kasa" />
        </div>

        <ul className="navigation">
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/About">
                <li>A Propos</li>
            </NavLink>
        </ul>
       </nav>
    );
};

export default Navigation;