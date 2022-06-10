import gym from "../../images/Gym-Edge.jpg";
import one from "../../images/Gym-Edge-2.png";
import two from "../../images/Gym-Edge4.png";
const ProjectThree = () => {
  return (
    <div className=" d-projects">
   <div className="project-img">
      <img className="img-fluid" src={gym} alt="" />
      <img className="img-fluid" src={one} alt="" />
      <img className="img-fluid" src={two} alt="" />
      </div>
      <h2>Gym Edge</h2>
      <h4>Details About Project</h4>
      <ul>
        <li>
          A responsive website that implements an email password and social
          authentication system. On this website, users can browse all the
          services and buy services
        </li>
        <li>It’s a personal gym and yoga instructor website.</li>
        <li>
          <strong>Technology:</strong> React, Firebase, React router dom,
          Bootstrap, React firebase hooks, Node js, Axios, Express js, MongoDB,
          JWT, and Heroku.
        </li>
      </ul>
    </div>
  );
};

export default ProjectThree;
