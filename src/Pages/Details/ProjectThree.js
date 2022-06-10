import gym from "../../images/Gym-Edge.jpg";
const ProjectThree = () => {
  return (
    <div className=" d-projects">
      <img className="img-fluid" src={gym} alt="" />
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
