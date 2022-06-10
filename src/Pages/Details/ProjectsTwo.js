import invento from "../../images/Invento.jpg";
import one from "../../images/Invento-2.png";
import two from "../../images/Invento-4.png";
const ProjectsTwo = () => {
  return (
      <div className=" d-projects">
           <div className="project-img">
      <img className="img-fluid" src={invento} alt="" />
      <img className="img-fluid" src={one} alt="" />
      <img className="img-fluid" src={two} alt="" />
      </div>
        <h2>Invento Warehoiuse</h2>
        <h4>Details About Project</h4>
        <ul>
          <li>
            A fully functional responsive website that implements an email
            password and social authentication system. On the website, users can
            browse products, update stock, add products, and delete a product.
          </li>
          <li>It’s a personal warehouse inventory management website.</li>
          <li>
            <strong>Technology:</strong> React, Firebase, React router dom,
            Bootstrap, React firebase hooks, Node js, Express js, MongoDB, JWT,
            Heroku, and Axios.
          </li>
        </ul>
      </div>
  );
};

export default ProjectsTwo;
