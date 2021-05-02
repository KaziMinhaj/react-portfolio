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
        <a href="#" className="btn know-me">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
