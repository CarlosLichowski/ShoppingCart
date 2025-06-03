import React from "react";
import { Navbar as BsNavBar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Keep this import, it's correct
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NavBar = () => {
  return (
    <BsNavBar bg="dark" variant='dark' expand="lg" sticky="top"> {/* Added sticky="top" */}
      {/* Changed Container to Container fluid */}
      <Container fluid> 
        
        <BsNavBar.Brand as={Link} to="/"> 
          Ecommerce
        </BsNavBar.Brand> 

        <BsNavBar.Toggle aria-controls="basic-navbar-nav" /> 

        <BsNavBar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto"> {/* 'me-auto' pushes links to the right */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </BsNavBar.Collapse>
      </Container>
    </BsNavBar>
  );
}

export default NavBar;