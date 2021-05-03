import React from "react";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";

const Projects = () => {
  return (
    <div className="bg-dark p-5 projects">
      <div class="card-group container m-5 p-5 ">
        <div class="card m-3">
          <img class="card-img-top" src={project3} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <button className="btn btn-outline-dark m-1">Github</button>
            <a
              target="_blank"
              className="btn btn-outline-success"
              href="https://cabify-73d24.web.app"
            >
              Live Preview
            </a>
          </div>
        </div>
        <div class="card m-3">
          <img class="card-img-top" src={project2} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <button className="btn btn-outline-dark m-1">Github</button>
            <a
              target="_blank"
              className="btn btn-outline-success"
              href="https://cabify-73d24.web.app"
            >
              Live Preview
            </a>
          </div>
        </div>
        <div class="card m-3">
          <img class="card-img-top" src={project3} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Cabify</h5>
            <p class="card-text">
              Its a cab ride website. Through this cabify an user can book a
              ride. In addition an admin can add or remove a ride service.
            </p>
          </div>
          <div class="card-footer">
            <button className="btn btn-outline-dark m-1">Github</button>
            <a
              target="_blank"
              className="btn btn-outline-success"
              href="https://cabify-73d24.web.app"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
