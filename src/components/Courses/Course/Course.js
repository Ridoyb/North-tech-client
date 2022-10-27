import { Link, useLoaderData } from 'react-router-dom';
import React from 'react';
import './Course.css'
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Course = () => {
   const course=useLoaderData();
   console.log(course.name);



   



    return (
        <div className='my-5 text-center container'>

      

            <div ref={ref}>
                <div>
                    <h1 className='mb-3'>{course.name}</h1>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) =>  <Button onClick={toPdf} className='btn-pdf' variant="">Generate PDF</Button>}
                    </Pdf>
                </div>
                <hr className='break' />
                <div>
                    <img className='w-100 my-5'  src={course.image} alt="" />
                </div>
                <div className=' price-rating-btn d-flex justify-content-between align-items-center mb-5'>
                    <h4>Price: ${course.price}</h4>
                    <h4 className='text-center'><FaStar className='star'></FaStar> {course.rating}</h4>
                    <Button variant="" className='btn-start'> <Link to={`/checkout/${course.id}`} className='link-start-btn'>Get Premium Access</Link> </Button>

                </div>
                <div>
                    <p className='description text-start text-black'>{course.description}</p>
                </div>
            </div>
            
        </div>
    );
};


export default Course;