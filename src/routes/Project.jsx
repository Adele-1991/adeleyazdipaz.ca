import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterHero2 from "../components/Hero2/FooterHero2";
import HeroImg2 from "../components/Hero2/HeroImg2";
import ExplainProject from "../components/explainationProject/ExplainProject1";
import WorkProject from "../components/explainationProject/WorkProject";
import Work from '../components/Data/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent Projects" />
      <WorkProject/>
      <Work/>
      <ExplainProject />
      
      <FooterHero2 />
    </div>
  );
};

export default Project;
