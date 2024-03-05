import "./FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaUser,
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/Untitled3.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div>
            <FaUser size={20} className="fauser" />
            <h2>Portfolio!</h2>
          </div>
          <div>
            <h4>Connect me</h4>
            <p>
              Motivated person constant learning,
              <br />
              developing myself and abiliy getting update. Excellent teamwork,{" "}
              <br />
              knowing about Design
            </p>

            <div className="social">
              <h4>
                <FaGithub
                  size={20}
                  className="github"
                  style={{ color: "#fff", marginRight: "5px" }}
                />
                <FaStackOverflow
                  size={20}
                  className="stackoverflow"
                  style={{ color: "#fff", marginRight: "5px" }}
                />
                <FaLinkedin
                  size={20}
                  className="linkedin"
                  style={{ color: "#fff", marginRight: "5px" }}
                />
              </h4>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="location">
            <FaHome
              size={35}
              className="fahome"
              style={{ color: "#fff", marginRight: "12px" }}
            />
            <p>
              Address: 20 Daniel Drive Charlottetown PEI <br />
              Canada
            </p>
          </div>

          <div>
            <div style={{ marginBottom: "25px" }} className="faphone">
              <h4>
                <FaPhone
                  size={20}
                  className="phone"
                  style={{ color: "#fff", marginRight: "12px" }}
                />
                +1 902 388 4893{" "}
              </h4>
            </div>
          </div>
          <div className="faemail">
            <h4>
              <IoMdMail
                size={20}
                className="IoMdMail"
                style={{ color: "#fff", marginRight: "12px" }}
              />
              adele.yazdipaz@gmail.com
            </h4>
          </div>
        </div>
        <div className="center">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
