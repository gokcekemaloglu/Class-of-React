import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from "../img/logo.png"
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={({isActive})=>({color: isActive && "red"})} className="nav-link" to="/">Home</NavLink>
            <NavLink style={({isActive})=>({fontSize: isActive && "50px"})} className="nav-link" to="/teacher">Teacher</NavLink>
            <NavLink style={({isActive})=>({background: isActive && "lightgreen"})} className="nav-link" to="/courses">Courses</NavLink>
            <NavLink style={({isActive})=>({border: isActive && "1px solid blue"})} className="nav-link" to="/contacts">Contacts</NavLink>
            <NavLink className="nav-link" to="/paths">Paths</NavLink>
            <Nav.Link target="blank" href="https://github.com/">Github</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar