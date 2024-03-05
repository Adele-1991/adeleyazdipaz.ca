import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FooterHero2 from '../components/Hero2/FooterHero2';
import HeroImg2 from '../components/Hero2/HeroImg2';
import AboutContent from '../components/About/AboutContent';


const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="ABOUT ME." text="I am a Full Stack Developer"/>
       <AboutContent/>

       <FooterHero2/>
      
    </div>
  )
}

export default About;
