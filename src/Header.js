import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav.Link as={Link} href="/" to="/" className="nav-link">Home</Nav.Link>
        <Nav.Link as={Link} href="/Profile" to="/Profile" className="nav-link">Profile</Nav.Link>
        <Nav.Link as={Link} href="/CreateBook" to="/CreateBook" className="nav-link">Create</Nav.Link>
        <Nav.Link as={Link} href="/UpdateBook" to="/UpdateBook" className="nav-link">Update</Nav.Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default Header;
