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
        <div   className='my-5 text-center container w-50'>
            <div >
                <div>
                    
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) =>  <Button onClick={toPdf} className='btn-pdf' variant="">Generate PDF</Button>}
                    </Pdf>
                </div>
                <hr className='break' />
                <div >
                    <div >
                        <img className='w-100 my-5'  src={course.image} alt="" />
                    </div>
                    <div ref={ref} className='mt-5'>
                        <br />
                        <div>
                        <div  className='  mb-5 w-100 mx-auto title-price-rating-btn'>
                            <h3 className='mb-3 our-courses '>{course.name}</h3>
                            <div className='price-rating-btn d-flex justify-content-between align-items-center'>
                            
                                <div>
                                    <h4  className='our-courses'>Price: ${course.price}</h4>
                                </div>
                                <div>
                                    <h4  className='text-center our-courses'><FaStar className='star'></FaStar> {course.rating}</h4>
                                </div>
                            </div>
                            <Button variant="" className='btn-start'> <Link to={`/checkout/${course.id}`} className='link-start-btn'>Get Premium Access</Link> </Button>

                        </div>
                        </div>
                        
                        <div>
                            <p className='description text-start w-100 mx-auto'>{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default Course;