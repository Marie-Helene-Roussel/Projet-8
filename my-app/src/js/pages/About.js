import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner'
import source2 from '../../img/img_source2.jpg'
import dataAbout from '../../data/about.json'
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

// Ici c'est la page à propos
const About = () => {
    return (
        <div>
            <Navigation/>
            <main>
            <Banner src={source2} alt="photo de la montagne"    />
            <div className='about-container'>
                {dataAbout.map((data, index) => (
                    <Collapse key={index} titlekey={data.title} textKey={data.text} />
                ))}
            </div>

            </main>
            <Footer/>
        </div>
    );
};

export default About;