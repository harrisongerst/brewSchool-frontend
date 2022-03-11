import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function Header(props) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} to="/" >Brew School</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/create">New Brew</Nav.Link>
        <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}
