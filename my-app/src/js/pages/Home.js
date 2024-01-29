import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import logo from "../../img/img_source.png";
import Card from "../components/Card";

// la page d'accueil du site

const Home = () => {
  return (
    // header avec Navigation incluant logo et navigation
    // le main pour la partie principal du site avec la bannière et avec les cartes 
    // présentation des appartements hors de prix
    // le footer pour le pieds de page.
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Banner src={logo} text="Chez vous, partout et ailleurs" alt=" Image de la montagne en bannière" />
        
        <div>
          <Card />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
