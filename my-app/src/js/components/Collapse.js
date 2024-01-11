import React, { useState } from "react";
import arrow from "../../asset/font/arrow_back_ios-24px 2.svg";

const Collapse = ({ titleKey, textKey }) => {
  // ça permet de déterminer si le texte s'affiche et qu'il est ouvert! il est par défaut en faux
  const [isExpanded, setExpanded] = useState(false);

  // c'est la fonction au moment ou on click sur la flèche retour
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  // la constante qui permet de vérifier que textKey ne soit pas vide
  const bulletedList = Array.isArray(textKey) && textKey.length > 0;

  // implémentation de la liste à puces
  const contentElement = bulletedList ? (
    <ul className={'collapse${ isExpanded ? "-active" : "" }  '}>
      {textKey.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className={'collapse${ isExpanded ? "-active" : ""}'}> {textKey} </p>
  );

  return (
    <div className="description-container">
      <div className="main-deroulant">
        <h2>{titleKey}</h2>
        <img
          src={arrow}
          alt="flèche retour du site pour revenir en arrière"
          onClick={handleClick}
          className={`arrowImg${isExpanded ? "-activ" : ""}`}
        />
      </div>
      {contentElement}
    </div>
  );
  }

export default Collapse;
