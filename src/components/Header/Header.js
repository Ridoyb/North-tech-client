import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import logo from '../../Assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    // const {user}=useContext(AuthContext);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img className='w-50 logo' src={logo} alt=""></img>North Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/courses'>Courses</Nav.Link>
            <Nav.Link href='/faq'>FAQ</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href='/login'>Log In</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link> */}
            <Nav.Link href=''>{user?.displayName}</Nav.Link>
            <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </>
            <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;