import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";
import React from "react";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project1onlineshop" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink className="btn" to={props.view}>
            View
          </NavLink>
          <NavLink className="btn" to={props.source}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
