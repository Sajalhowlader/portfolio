import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  className='px-5 nav-con'>
   <Navbar.Brand href="#home">SAJAL</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
       <button className='resume-btn'>Download Resume</button>
      </Nav.Link>
    </Nav>
   </Navbar.Collapse>
</Navbar>
    </>
  );
};

export default Header;