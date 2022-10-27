import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const premiumAccess= useLoaderData();
    return (
        <div>
            <h1>This is checkout page: {premiumAccess.name}</h1>
        </div>
    );
};

export default CheckOut;