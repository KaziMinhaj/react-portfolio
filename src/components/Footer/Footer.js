import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="text-light text-center">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <p className="text-light">
              Made with <FontAwesomeIcon icon={faHeart} /> by kazi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
