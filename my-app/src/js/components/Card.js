import React from 'react';
import { NavLink } from 'react-router-dom';
import dblogement from "../../data/data.json"

function Card() {
    return (
        <div className='gallery'>
            {dblogement.map((logement, index) => (
                <NavLink key={index} to={'./logements/${logement.id}'}>
                    <div className='card'>
                        <img src={logement.cover} alt="images des logements" />
                        <p>{logement.title}</p>
                    </div>
                </NavLink>


            ))}

        </div>
    );
}

export default Card;