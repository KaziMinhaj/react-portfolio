import React from "react";
import kazi from "../images/kazi2.jpg";

const About = () => {
  return (
    <div id="about" className="about-me">
      <div className="container">
        <div style={{ height: "75vh" }} className="row p-5">
          <div className="col-md-6 text-center">
            <img className="w-50 rounded-circle" src={kazi} alt="" />
          </div>
          <div className="col-md-6 w-50 ">
            <div>
              <div className="">
                <h1 className="p-2 text-warning">ABOUT ME</h1>
              </div>
              <div>
                <p className="p-2 text-light">
                  Hello, I am Kazi Minhajul Haider. Studying BSc in CSE at
                  BRACU. A passionate webdeveloper from Bangladesh. I love to
                  make website using MERN Stack. I like to watch & play cricket
                  in my leisure time. You can contact with me through email. I
                  am fast at replying emails.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="p-2 text-warning">SKILLS</h1>
              </div>
              <div className="row text-light">
                <div className="col-md-6">
                  <div>
                    <ul className="myul">
                      <li>React.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>Node.js</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                </div>
                <div className="col md 6">
                  <div>
                    <ul className="myul">
                      <li>MaterialUI</li>
                      <li>ES6/7</li>
                      <li>Firebase</li>
                      <li>Heroku</li>
                      <li>Java</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
