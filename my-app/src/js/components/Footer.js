import React from 'react';
import logo from "../../logo/logo-white.svg";

// C'est le composant qui permet de créer le pied de page.
const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt="logoFooter" />
            </div>
            <div className='subtitle'>
                <p> © 2024 Kasa. All rights reserverd </p>
            </div>
        </footer>
    );
};

export default Footer;