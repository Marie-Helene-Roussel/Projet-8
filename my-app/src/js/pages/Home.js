import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import logo from '../../img/img_source.png';





const Home = () => {
    return (
        <div>
            <Navigation />
           <Banner src={logo} alt=' Image de la montagne en bannière'/>





           <Footer/>
           
            
        </div>
    );
};

export default Home;