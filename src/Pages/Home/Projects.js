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
          <span>React.js</span>
          <span>Firebase</span>
          <span>React Query</span>
          <span>React Router</span>
          <span>React Firebase</span>
          <span>React Hooks</span>
          <span>Tailwind.CSS</span>
          <span>DausiUI</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <div className="info-btn">
            <button className="live-site">Live Site</button>
            <button className="live-site">Clint Code</button>
            <button className="live-site">Server Code</button>
          </div>
          <button>Details</button>
        </div>
        <div className="project-details">
          <img className="img-fluid" src={invento} alt="" />
          <h2>Nortex Tools</h2>
          <h4>Technology</h4>
          <span>React.js</span>
          <span>Firebase</span>
          <span>React Query</span>
          <span>React Router</span>
          <span>React Firebase</span>
          <span>React Hooks</span>
          <span>Tailwind.CSS</span>
          <span>DausiUI</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <div className="info-btn">
            <button className="live-site">Live Site</button>
            <button className="live-site">Clint Code</button>
            <button className="live-site">Server Code</button>
          </div>
          <button>Details</button>
        </div>
        <div className="project-details">
          <img className="img-fluid" src={gym} alt="" />
          <h2>Nortex Tools</h2>
          <h4>Technology</h4>
          <span>React.js</span>
          <span>Firebase</span>
          <span>React Query</span>
          <span>React Router</span>
          <span>React Firebase</span>
          <span>React Hooks</span>
          <span>Tailwind.CSS</span>
          <span>DausiUI</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <div className="info-btn">
            <button className="live-site">Live Site</button>
            <button className="live-site">Clint Code</button>
            <button className="live-site">Server Code</button>
          </div>
          <button>Details</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
