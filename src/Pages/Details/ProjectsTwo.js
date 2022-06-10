import invento from "../../images/Invento.jpg";
const ProjectsTwo = () => {
  return (
      <div className=" d-projects">
        <img className="img-fluid" src={invento} alt="" />
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
