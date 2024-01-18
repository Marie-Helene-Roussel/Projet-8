import React from "react";
import Navigation from "../components/Navigation";
import Caroussel from "../components/Caroussel";
import Error from "./Error";
import Footer from "../components/Footer";
import dblogement from "../../data/data.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Stars from "../components/Stars"

const Logement = () => {
  // pour récupérer les id des logements à partir de l'url qui est dans
  // data.jdon
  const { id } = useParams();

  // ça trouve le logement qui correspond à la base de données

  const logement = dblogement.find((apptm) => apptm.id === id);

  // Condition, si la page n'existe pas
  if (!logement) {
    return <Error />;
  }

  return (
    <div>
      <Navigation />
      <main>
        <div className="header-img-container">
          <Caroussel data={logement} />
        </div>
        <div className="header-container">
          <div className="title-container">
            <h2>{logement.title}</h2>
            <div className="subtitle-container">
              <p>{logement.location}</p>
              <ul className="tag">
                {logement.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="owner-container">
            <div className="owner">
              {/* Permet de rendre plus lisible en séparant le nom et le prénom dans un tableau */}
              <h3>
                {logement.host && logement.host.name && (
                  <>
                    {logement.host.name.split(" ")[0]}
                    <br />
                    {logement.host.name.split(" ")[1]}
                  </>
                )}
              </h3>
              <img
                src={logement.host.picture}
                alt="les photos des appartements"
              />
            </div>
            <div>
              < Stars rating={parseFloat(logement.rating)}   />
            </div>
          </div>
        </div>
        <div className="rolling-container">
          <Collapse titleKey="Description" textKey={logement.description} />
          <Collapse titleKey="Equipements" textKey={logement.equipments} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Logement;
