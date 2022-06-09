import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import navImg from '../../images/oo.jpg'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  className='px-5 nav-con'>
   <Navbar.Brand href="#home" className='navImg'><img  src={navImg} alt="" /> <span>SAJAL</span></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink className='home-menu' to="/">HOME</NavLink>
      <NavLink className='home-menu' to="/">FEATURES</NavLink>
      <NavLink className='home-menu' to="/">PROJECTS</NavLink>
      <NavLink className='home-menu' to="/">CONTACTS</NavLink>
    </Nav>
    <Nav>
      <NavLink  to="/">
       <button className='resume-btn'>Download Resume</button>
      </NavLink>
    </Nav>
   </Navbar.Collapse>
</Navbar>
    </>
  );
};

export default Header;