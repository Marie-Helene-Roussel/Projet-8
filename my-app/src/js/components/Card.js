import React from "react";
import { NavLink } from "react-router-dom";
import dblogement from "../../data/data.json";

// les cadre où se trouve les images des logements de la page d'acceuil
const Card = () => {
  return (
    <div className="gallery">
      {dblogement.map((logement, index) => (
        <NavLink key={index} to={`./logements/${logement.id}`}>
          <div className="card">
            <img src={logement.cover} alt="images des logements" />
            <p>{logement.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
