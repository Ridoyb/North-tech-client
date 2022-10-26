import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    return (
        <div>
            <div className='text-center mb-5 login-from mt-5 pb-3'>
            <h3 className='text-center mt-5 mb-5'>Register</h3>
                <Form className='container '>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Control type="url" placeholder="Enter Photo Url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password"required/>
                    </Form.Group>
                    <Button  className='btn-login px-5' variant="" type="submit">
                        Register
                    </Button>
                </Form>

                <div className=' container center-separator mt-5 mb-5 w-25'>OR</div>

                <ButtonGroup  vertical>
                    <Button className='btn-login px-5 mb-2'> <FaGoogle className='mx-2'></FaGoogle> Register With Google</Button>
                    <Button className='btn-login px-5'> <FaGithub className='mx-2'></FaGithub>Register With GitHub</Button>
                </ButtonGroup>
        </div>
        </div>
    );
};

export default Register;