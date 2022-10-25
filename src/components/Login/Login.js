import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = () => {
    return (
        <div className='text-center mb-5'>
            <h3 className='text-center mt-5 mb-5'>Log In</h3>
                <Form className='container w-25 '>
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

                <hr className='hr-text' data-content="OR" />
        </div>
        
    );
};

export default Login;