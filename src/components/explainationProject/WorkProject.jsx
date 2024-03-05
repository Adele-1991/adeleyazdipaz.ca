// import "./WorkProjectStyle.css";
// import ProjectImg from "../assets/Desktop - 1.png"
// import ProjectImg2 from "../assets/SPRK_default_preset_name_custom – 1.png"
// import ProjectImg3 from "../assets/portfolio_img_3.jpg"
// import React from "react";

// const WorkProject = () => {
//   return (
//     <div className="work-container">
//       <h1 className="project-heading">Projects</h1>
//       <div className="project">
//         <div className="project-container">
//           <img  src={ProjectImg} alt="Landing-Page-SportReact1" className="project-img"/>
//           <img src={ProjectImg2} alt="Landing-page-HeroReact2" className="project-img"/>
//           <img src={ProjectImg3} alt="Landing-page-HeroReact3"  className="project-img"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkProject;

import React, { Component } from 'react';
import style from './WorkProject2Style.module.css';
import f1 from "../assets/Desktop - 1.png";
import f2 from "../assets/SPRK_default_preset_name_custom – 1.png";
import f3 from "../assets/portfolio_img_3.jpg";
import f4 from "../assets/professionals_main_img.jpg";

 class WorkProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }


  nextSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex:(prevState.slideIndex +1) % this.slides.length, 
    }));
  };
  prevSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex:(prevState.slideIndex -1 + this.slides.length) % this.slides.length,
    }));
  };
  
  slides =[
    {id:1, src: f1, alt: "Image 1"},
    {id:2, src: f2, alt: "Image 2"},
    {id:3, src: f3, alt: "Image 3"},
    {id:4, src: f4, alt: "Image 4"},
  ];
  render() {
    return (
      <div className={style["slider-container"]}>
        <div className={style["slider"]}>
          {this.slides.map((slide)=>(<img 
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          className={this.state.slideIndex  + 1 === slide.id ? style["active"] : style["deactive"]}
           />
           ))}
        
        </div>
        <button className={style["prev-button"]} onClick={this.prevSlideHandler}>Previous</button>
        <button className={style["next-button"]} onClick={this.nextSlideHandler}>Next</button>
      </div>
    )
  }
}
export default WorkProject;
