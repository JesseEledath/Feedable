import React from "react";
import "./Footer.css";
import footerlogo from "../Nav/Assets/github.svg";

const Footer = () => (
  <footer className="footer">
     <div className="group-git">
      <a href="https://github.com/JesseEledath/Feedable">
        <i class="fab fa-github"></i>{" "}
      </a>
    </div>

    <div className="link">
      <div className="link">
        <a href={"https://github.com/bkhundmiri"}>Bilal Khundmiri</a>
        <a href="https://www.linkedin.com/in/bilal-khundmiri/"><i class="fab fa-linkedin"></i></a>
      </div>
      <div className="link">
        <a href={"https://github.com/justCullen"}>Cullen Scarborough</a>
        <a href="https://www.linkedin.com/in/cullen-scarborough/"><i class="fab fa-linkedin"></i></a>
      </div>
      <div className="link">
        <a href={"https://github.com/dawit-design"}>Dawit Endaylalu</a>
        <a href="https://www.linkedin.com/in/dawit-endaylalu-0ab8a41b3/"><i class="fab fa-linkedin"></i></a>
      </div>
      <div className="link">
        <a href={"https://github.com/JesseEledath"}>Jesse Eledath</a>
        <a href="https://www.linkedin.com/in/jesse-eledath/"><i class="fab fa-linkedin"></i></a>
      </div>
      
    </div>
  </footer>
);

export default Footer;
