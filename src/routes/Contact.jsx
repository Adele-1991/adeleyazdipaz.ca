import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FooterHero2 from '../components/Hero2/FooterHero2';
import HeroImg2 from '../components/Hero2/HeroImg2';
import Form from "../components/Form/Form"

const Contact = () => {
  return (
    <div>
          <Navbar/> 
          <HeroImg2 heading="Contact" text="let's have a conversation"/>
          <Form/>
          <FooterHero2/>


      
 
    </div>
  )
}

export default Contact
