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
    <Navbar.Brand as={NavLink} to="/" >
    <img
          alt="coffee cup emoji"
          src="https://hotemoji.com/images/emoji/a/1m4i86g1m6o3sa.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Brew School</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/create">New Brew</Nav.Link>
        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
        <Button variant="danger" onClick={logout}>Logout</Button>
      </Nav>
  </Container>
</Navbar>
    </header>
  )
}
