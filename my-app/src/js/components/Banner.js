import React from 'react';
 
// Mise en place de la bannière
const Banner = ({ src, alt, text }) => {
    return (
        <div className='banner'>
            {src && <img src={src} alt={alt} />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default Banner;