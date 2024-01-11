import React from "react";
import starFull from "../../img/star-active.png"
import starEmpty from "../../img/star-inactive.png"

const Stars = ({ rating }) =>{
    // Le tableau d'étoile pour les notes de chaque logement
    const stars = [];
    for (let i=0; i < 5; i++) {
        starEmpty.push(
            <span key={i} className={ i < rating ? "star-filled" : "star-empty"} >
                <img src={i < rating ? starFull : starEmpty} alt="étoile qui juge de la qualité du logement" />

            </span>
        )
    }

    return <div className="stars-container">{stars}</div>

}








export default Stars;