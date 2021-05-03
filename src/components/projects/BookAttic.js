import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Bookattic from "../../images/bookattic.jpeg";

const BookAttic = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <a
            className="m-5 alink"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded"
              style={{ width: "75%" }}
              src={Bookattic}
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5 ">
          <div className=" bg-dark rounded p-4">
            <h1 className="color p-2 ">BookAttic</h1>

            <p className="text-light p-2">
              Developed a website where a user can order a book, An admin can
              add or delete items
            </p>
          </div>
          <div className="d-flex p-2 text-light mono-font ">
            <p className="m-2">React.js</p>
            <p className="m-2">Express.js</p>
            <p className="m-2">MongoDB</p>
            <p className="m-2">Bootstrap</p>
          </div>
          <div className="pt-2 m-2">
            <a
              className="m-2 alink"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a
              className="m-2 alink"
              href="https://github.com/KaziMinhaj/book-attic-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icons" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAttic;
