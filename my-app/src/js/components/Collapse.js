import React, { useState } from "react";
import arrow from "../../asset/font/arrow_back_ios-24px 2.svg";

const Collapse = ({ titleOk, textOk }) => {
  // ça permet de déterminer si le texte s'affiche et qu'il est ouvert! il est par défaut en faux
  const [isDevelop, setDevelop] = useState(false);

  // c'est la fonction au moment ou on click sur la flèche retour
  const handClick = () => {
    setDevelop(!isDevelop);
  };

  // la constante qui permet de vérifier que textOk ne soit pas vide
  const bulletedList = Array.isArray(textOk) && textOk.length > 0;

  // implémentation de la liste à puces
  const contentElement = bulletedList ? (
    <ul className={'collapse${ isDevelop ? "-active" : "" }  '}>
      {textOk.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className={'collapse${ isDevelopp ? "-active" : ""}'}> {textOK} </p>
  );

  return (
    <div className="description-container">
      <div className="main-deroulant">
        <h2>{titleOk}</h2>
        <img
          src={arrow}
          alt="flèche retour du site pour revenir en arrière"
          onClick={handClick}
          className={`arrowImg${isDevelop ? "-activ" : ""}`}
        />
      </div>
      {contentElement}
    </div>
  );

export default Collapse;
