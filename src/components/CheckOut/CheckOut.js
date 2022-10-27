import React, { useContext, useState } from 'react';
import {  Navigate, useLoaderData, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CheckOut.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import image from '../../Assets/logo.png'

const CheckOut = () => {

    const CheckOutPayment = (event) => {
        event.preventDefault();
        toast.success("Payment Successful");
        window.location = '/';
      }

    const premiumAccess= useLoaderData();
    const {user } = useContext(AuthContext);

    return (
        <div  className='mb-5'>
            <h1 className='text-center mt-5 heading mx-auto'>Check Out</h1>
            <div className=' checkout-from mt-5 w-50 p-5 pt-3 text-center'>
            <img className='w-25 mt-2' src={image} alt="" />
                <h5>Course Name : {premiumAccess.name}</h5>
                <h5>User Name: {user?.displayName}</h5>
                <p className='p'>Course Name : ${premiumAccess.price}</p>
                <Button onClick={CheckOutPayment}  className='btn-checkout px-5' variant="" type="submit">
                        Check Out
                    </Button>
            </div>
        </div>
    );
};

export default CheckOut;