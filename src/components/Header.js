import {
  faFacebookSquare,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h3 className="text-light">Hello, I am</h3>
        <h1>Kazi Md Minhajul Haider</h1>
        <Typed
          className="typed-text"
          strings={[
            "I am a MERN Stack webdeveloper",
            "I build things for internet",
            "Thank you for checking me out",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
        <div className="d-flex">
          <a
            href="https://drive.google.com/uc?export=download&id=1SkuLIxCRI0x7QX71RJmP1zZ7E8T-VehU"
            className="btn know-me"
          >
            Download Resume
          </a>
          <a href="mailto:kaziminhajulhaider@gmail.com" className="btn know-me">
            Contact Me
          </a>
        </div>
        <div>
          <a
            target="_blank"
            className="color m-2"
            href="https://www.linkedin.com/in/kaziminhajulhaider/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            className="color m-2"
            href="https://www.facebook.com/kazi.md.minhajul.haider/"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            target="_blank"
            className="color m-2"
            href="https://github.com/KaziMinhaj"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
