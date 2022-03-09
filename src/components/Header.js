import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return (
    <header>
      <h1>Brew School</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/create">
          <div>New Brew</div>
        </Link>
        <Link to="/signup">
          <div>Signup</div>
        </Link>
      </nav>
    </header>
  )
}
