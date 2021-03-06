import two from '../../images/Nortex-4.png';
import nortex from "../../images/Nortex.jpg";
import one from '../../images/Nortex2.png';
const ProjectsOne = () => {
  return (
    <div className=" d-projects">
      <div className="project-img">
      <img className="img-fluid" src={nortex} alt="" />
      <img className="img-fluid" src={one} alt="" />
      <img className="img-fluid" src={two} alt="" />
      </div>
      <h2>Nortex Tools</h2>
      <h4>Details About Project</h4>
      <ul>
        <strong>User</strong>
        <li>
     
          A fully functional responsive website that implements an email
          password and social authorization system. On the website, users can
          browse products, order products, pay with stripe, edit profiles, and
          give a review.
        </li>
        <li>
          An admin can see all users, manage products, add products, delete
          products, edit profiles, Change payment status, and make an admin.
        </li>
        <li>
          <strong>Technology:</strong> Firebase, React router dom, React query,
          Tailwind, daisyUI, React hook from, React firebase hooks, Stripe, Node
          js, Express js, MongoDB, JWT, and Heroku.
        </li>
      </ul>
      <a
              className="live-site"
              href="https://nortex-83a1c.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
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
  );
};

export default ProjectsOne;
