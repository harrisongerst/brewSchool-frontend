import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';


export default function Header(props) {

  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem("token")
    navigate("/", {replace: true})
  }

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
        <Button variant="danger" onClick={logout}>Logout</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}
