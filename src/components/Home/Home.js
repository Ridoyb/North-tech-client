import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css'

import slider from '../../Assets/slider.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/courses'><img className='img-fluid' src={slider} alt="" /></Link>
            <div className='text-center pt-5 pb-5 learn-python'>
                <h2>Learn Python Today!!</h2>
                <p>If you want to know how to learn Python, this is the only guide you’ll ever need.</p>
                <Link to='/courses'><Button variant="light">Get Started</Button></Link>
            </div>
            
        </div>
    );
};

export default Home;