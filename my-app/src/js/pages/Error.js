import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

// Ici c'est la page erreur 404
const Error = () => {
    return (
        <div>
            <Navigation/>
            <main>
                <div className='error'>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/"> Retournez à la page d'accueil</NavLink>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Error;