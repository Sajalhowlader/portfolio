import nortex from "../../images/Nortex.png";
const ProjectsOne = () => {
  return (
    <div className="px-5 d-projects" >
      <img className="img-fluid" src={nortex} alt="" />
      <h2>Nortex Tools</h2>
      <h4>Details About Project</h4>
      <ul>
        <li>
          {" "}
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
    </div>
  );
};

export default ProjectsOne;
