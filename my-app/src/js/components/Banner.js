import React from "react";

// Mise en place de la bannière qui se trouve sur l'entête de l'accueil et de about
const Banner = ({ src, alt, text }) => {
  return (
    <div className="banner">
      {src && <img src={src} alt={alt} />}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Banner;
