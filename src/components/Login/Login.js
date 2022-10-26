import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Login.css'
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className='text-center mb-5 login-from mt-5 pb-3'>
            <h3 className='text-center mt-5 mb-5'>Log In</h3>
                <Form className='container '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button  className='btn-login px-5' variant="" type="submit">
                        Log In
                    </Button>
                </Form>

                <div className=' container center-separator mt-5 mb-5 w-25'>OR</div>

                <ButtonGroup  vertical>
                    <Button className='btn-login px-5 mb-2'> <FaGoogle className='mx-2'></FaGoogle> LogIn With Google</Button>
                    <Button className='btn-login px-5'> <FaGithub className='mx-2'></FaGithub>LogIn With GitHub</Button>
                </ButtonGroup>
        </div>
        
    );
};

export default Login;