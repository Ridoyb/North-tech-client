import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import toast from 'react-hot-toast';
import './Login.css'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Please verify your email.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const {providerLogin}= useContext(AuthContext);

    const googleProvider= new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='text-center mb-5 login-from mt-5 pb-3'>
            <h3 className='text-center mt-5 mb-5'>Log In</h3>
                <Form onSubmit={handleSubmit} className='container '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button  className='btn-login px-5' variant="" type="submit">
                        Log In
                    </Button>
                </Form>

                <p className='text-dark mt-2'>Didn't register? <Link to='/register'>Register Now</Link></p>

                <div className=' container center-separator mt-5 mb-5 w-75'>OR</div>

                <ButtonGroup  vertical>
                    <Button onClick={handleGoogleSignIn} className='btn-login px-5 mb-2'> <FaGoogle className='mx-2'></FaGoogle> LogIn With Google</Button>
                    <Button className='btn-login px-5'> <FaGithub className='mx-2'></FaGithub>LogIn With GitHub</Button>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </ButtonGroup>
        </div>
        
    );
};

export default Login;