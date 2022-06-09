import React from "react";
import gym from "../../images/Gym-Edge.png";
import invento from "../../images/Invento.png";
import nortex from "../../images/Nortex.png";
const Projects = () => {
  return (
    <section className="px-5 my-5">
      <div className="title">
        <h1>Some of My Projects</h1>
        <p className="c-one"></p>
        <p className="c-two"></p>
      </div>
      <div className="project-container">
        <div className="project-details">
          <img className="img-fluid" src={nortex} alt="" />
          <h2>Nortex Tools</h2>
          <h4>Technology</h4>
          <div className="tech">
            <button>React.js</button>
            <button>Firebase</button>
            <button>JWT</button>
            <button>React Router</button>
            <button>React Hooks</button>
            <button>Tailwind.CSS</button>
            <button>DausiUI</button>
            <button>Node.js</button>
            <button>MongoDB</button>
          </div>
          <div className="info-btn">
            <a
              className="live-site"
              href="https://nortex-83a1c.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live a
            </a>

            <a
              className="live-site"
              href="https://github.com/Sajalhowlader/nortex-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clint Code
            </a>
            <a
              className="live-site"
              href="https://github.com/Sajalhowlader/nortex-server-side"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </div>
          <button className="details">Details</button>
        </div>
        <div className="project-details">
          <img className="img-fluid" src={invento} alt="" />
          <h2>Invento</h2>
          <h4>Technology</h4>
          <div className="tech">
            <button>React.js</button>
            <button>Firebase</button>
            <button>JWT</button>
            <button>React Router</button>
            <button>React Hooks</button>
            <button>Tailwind.CSS</button>
            <button>DausiUI</button>
            <button>Node.js</button>
            <button>MongoDB</button>
          </div>
          <div className="info-btn">
            <a
              className="live-site"
              href="https://c-and-a-warehouse.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live a
            </a>
            <a
              className="live-site"
              href="https://github.com/Sajalhowlader/invento-warehouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clint Code
            </a>
            <a
              className="live-site"
              href="https://github.com/Sajalhowlader/invento-server-side"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </div>
          <button className="details">Details</button>
        </div>
        <div className="project-details">
          <img className="img-fluid" src={gym} alt="" />
          <h2>Gym Edge</h2>
          <h4>Technology</h4>
          <div className="tech">
            <button>React.js</button>
            <button>Firebase</button>
            <button>Axios</button>
            <button>React Router</button>
            <button>React Hooks</button>
            <button>Bootstrap-5</button>
            <button>Heroku</button>
          </div>
          <div className="info-btn">
            <a
              className="live-site"
              href="https://gym-edge-react.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live a
            </a>
            <a
              className="live-site"
              href="https://github.com/Sajalhowlader/gym-edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clint Code
            </a>
          </div>
          <button className="details">Details</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
