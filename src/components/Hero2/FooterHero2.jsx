import "./FooterHero2Style.css";
import { FaHome, FaPhone, FaStackOverflow, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail} from "react-icons/io";
import React from "react";

const FooterHero2 = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>20 Daniel Drive</p>
              <p> Charlottetown</p>
              <p>PEI, Canada</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1 902-388-4893
            </h4>
          </div>
          <div className="email">
    
           <h4><IoMdMail size={20} style={{ color: "#fff", marginRight: "2rem" }} /> adele.yazdipaz@gmail.com</h4> 
          </div>
        </div>
       
        <div className="right">
            <h4 >About Me</h4>
            <p>Motivated person constant learning,
              <br />
              developing myself and abiliy getting update. Excellent teamwork,{" "}
              <br />
              knowing about Design</p>
              <div className="social">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}/>
                <FaStackOverflow
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}/>
                <FaLinkedinIn size={20} style={{ color: "#fff", marginRight: "2rem" }}/>

              </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHero2;
