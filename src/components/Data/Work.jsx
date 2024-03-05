import "../explainationProject/WorkCardStyles.css";
import WorkCardData from "./WorkCardData";
import WorkCard from "../explainationProject/WorkCard";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="projec-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
