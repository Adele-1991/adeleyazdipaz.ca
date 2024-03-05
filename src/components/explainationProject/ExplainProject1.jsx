import React from "react";
import "./ExplainationProject.css";
import { Link } from "react-router-dom";

const ExplainProject = () => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="card">
          <h5>Front-End</h5>
          <span className="bar"></span>
          <ul>
            <li>HTML5</li>
            <li>CSS/SCSS/BootStrap</li>
            <li> Java Script/ES6/ES7</li>
            <li>ReactJs/TypeScript</li>
        
          </ul>
          <Link to="./contact" className="btn1">
          Go To Github
          </Link>
        </div>
        <div className="card">
          <h5>Back-End</h5>
          <span className="bar"></span>
          <ul className="btc">
            <li>MongoDB</li>
            <li>Microsoft SQL</li>
            <li>Python</li>
            <li> PHP</li>
          </ul>
          <Link to="https://github.com/Adele-1991" className="btn1">
            Go To Github
          </Link>
        </div>
        <div className="card">
          <h5>UI/UX</h5>
          <span className="bar"></span>
          <ul>
            <li>Figma</li>
            <li>Adobe Xd</li>
            <li>Sketch</li>
            <li>Adobe Photoshop</li>
          </ul>
          <Link to="./contact" className="btn1">
          Go To Figma
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExplainProject;
