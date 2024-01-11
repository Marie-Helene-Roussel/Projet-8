import React, { useState } from "react";
import arrowLeft from "../../asset/font/arrowLeft";
import arrowRight from "../../asset/font/arrowRight";

const Caroussel = ({ data }) => {
  // Il s'agit de la position actuelle de la slide
  const [actuelSlide, setActuelSlide] = useState(0);
};

// pour la slide suivante
const nextSlide = () => {
  setActuelSlide((prevSlide) =>
    prevSlide === data.picturess.length - 1 ? 0 : prevSlide + 1
  );
};

//pour la slide précédente
const prevSlide = () => {
  setActuelSlide((prevSlide) =>
    prevSlide === 0 ? data.pictures.length - 1 : prevSlide - 1
  );
};

// fonction pour retourner le résultat et faire fonctionner le carroussel
return (
  <div className="slider-container">
    <img src={arrowLeft} onClick={prevSlide} alt="flèche de gauche" />
    <img src={arrowRight} onClick={nextSlide} alt="flèche de droite" />

        <div className="cont-container">
            <p> {actuelSlide === data.pictures.length ? actuelSlide -1 :actuelSlide +1}
            / {data.pictures.length} </p>
        </div>

  </div>
);



export default Caroussel;
