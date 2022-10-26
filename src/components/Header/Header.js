import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img className='w-50 logo' src={logo}></img>North Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/courses'>Courses</Nav.Link>
            <Nav.Link href='/faq'>FAQ</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/login'>Log In</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;