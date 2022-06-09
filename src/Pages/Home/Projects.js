import React from "react";
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
