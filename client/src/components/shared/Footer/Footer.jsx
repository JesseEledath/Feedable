import React from "react";
import "./Footer.css";
import footerlogo from "../Nav/Assets/github.svg";

const Footer = () => (
  <footer className="footer">
    <foreignObject x="0" y="0" width="100px" height="100px">
      <img
        className="footer-logo"
        width="100px"
        height="100px"
        src={footerlogo}
        style={{ borderRadius: "65%" }}
        alt="github-icon"
      />
    </foreignObject>
    <div className="git-link">
      <a href={"https://github.com/dawit-design"}>Dawit Endaylalu</a>
      <a href={"https://github.com/justCullen"}>Cullen Scarborough</a>
      <a href={"https://github.com/bkhundmiri"}>Bilal Khundmiri</a>
      <a href={"https://github.com/JesseEledath"}>Jesse Eledath</a>
    </div>
  </footer>
);

export default Footer;
