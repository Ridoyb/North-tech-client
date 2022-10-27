import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import image from '../../Assets/logo.png'

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address. If needed check your spam folder.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

            const handleUpdateUserProfile = (name, photoURL) => {
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
        
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => console.error(error));
            }
        
            const handleEmailVerification  = () => {
                verifyEmail()
                .then(() =>{})
                .catch(error => console.error(error));
            }
        
    }
    return (
        <div>
            <div className='text-center mb-5 login-from mt-5 pb-3'>
            <img className='w-25 mt-2' src={image} alt="" />
            <h3 className='text-center mb-5 our-courses'>Register</h3>
                <Form onSubmit={handleSubmit} className='container '>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control name='name' type="text" placeholder="Enter Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Control name='photoURL' type="url" placeholder="Enter Photo Url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control name='password' type="password" placeholder="Password"required/>
                    </Form.Group>
                    <Button  className='btn-login px-5' variant="" type="submit">
                        Register
                    </Button>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>

                <p className='text-dark mt-2'>Already registered? <Link to='/login'>LogIn</Link></p>

        </div>
        </div>
    );
};

export default Register;