import React from 'react';
import logo from "../../../public/logo/LOGO.png"
import { NavLink } from 'react-router-dom';

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