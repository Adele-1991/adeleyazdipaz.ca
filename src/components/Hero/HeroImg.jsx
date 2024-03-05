import "./HeroImgStyles.css";
import backImg from "../assets/header_main_img.jpg";
import { Link } from "react-router-dom";
import React from 'react';

const HeroImg = () => {
  return (
    <div className="hero">
     <div className="mask">
        <img className="back-Img" src={backImg} alt="backImg"/>

     </div>
     <div className="introduction">
        
        <h1>Adele<br/> Yazdi Paz</h1>
        <p>I am a Front-End developer and UI/UX designer</p>
        <div>
       <Link to={"/project"} className="btn">PROJECTS</Link> 
        <Link to={"/contact"} className="btn-light">CONTACT</Link>
        </div>
        
     </div>
    </div>
  )
}

export default HeroImg