import React from "react";
import BookAttic from "./projects/BookAttic";
import Cabify from "./projects/Cabify";
import ChefsPoint from "./projects/ChefsPoint";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="text-light text-center p-5">
        <h1>Some things I have built</h1>
      </div>
      <div>
        <ChefsPoint></ChefsPoint>
        <BookAttic></BookAttic>
        <Cabify></Cabify>
      </div>
    </div>
  );
};

export default Projects;
