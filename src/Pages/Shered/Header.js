import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navImg from "../../images/oo.jpg";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" nav-con">
        <Navbar.Brand href="#home" className="navImg">
          <img src={navImg} alt="" /> <span>SAJAL</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="home-menu" to="/">
              HOME
            </NavLink>
            <a className="home-menu" href="#featureId">
              FEATURES
            </a>
            <a className="home-menu" href="#projectId">
              PROJECTS
            </a>
            <a className="home-menu" href="#contactsId">
              CONTACTS
            </a>
            <a className="home-menu" href="#aboutId">
              ABOUT
            </a>
            <NavLink className="home-menu" to="/blog">
              BLOG
            </NavLink>
          </Nav>
          <Nav>
            <a
              className="resume-btn"
              href="https://drive.google.com/file/d/1tJvdJEtuzuxtAWRT1NUau37aMgC_R3Ln/"
              target="_black"
              download
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
