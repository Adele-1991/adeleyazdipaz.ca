import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="leftAbout">
        <h1>Who am I</h1>
        <p>
          My name is Adele Yazdi Paz. I am a Full Stack Developer. I have a
          passion for coding and I love to create new things. I am a team player
          and I am always eager to learn new things. I am a Full Stack
          Developer. I have a passion for coding and I love to create new
          things. I am a team player and I am always eager to learn new things.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top col-sm-1 col-md-1" id="obj1">
            <img src={React1} alt="true" className="img" id="im1"/>
          </div>
          <div className="img-stack bottom col-sm-1 col-md-1" id="obj1">
            <img src={React2} alt="true" className="img" id="im2"/>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default AboutContent;
