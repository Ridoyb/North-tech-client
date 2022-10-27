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
import { FaSignOutAlt } from "react-icons/fa";

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
          
            {/* <Nav.Link href='/login'>Log In</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link> */}
            <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='display-name'>{user?.displayName}</span>
                                        <Button className='logout' variant="" onClick={handleLogOut}><FaSignOutAlt className='text-light'></FaSignOutAlt></Button>
                                    </>
                                    :
                                    <>
                                        <Link className='login-register' to='/login'>Login</Link>
                                        <Link className='login-register' to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    className='profile-img w-50 mx-4'
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser className='w-100 user-icon'></FaUser>
                            }
                        </Link>
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;