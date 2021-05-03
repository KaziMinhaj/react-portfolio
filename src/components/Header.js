import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>This is my first protfolio website</h1>
        <Typed
          className="typed-text"
          strings={["Hello", "My Self Kazi", "Thank you for checking me out"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
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
    </div>
  );
};

export default Header;
