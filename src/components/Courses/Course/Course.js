import { useLoaderData } from 'react-router-dom';
import './Course.css'
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Course = () => {
   const course=useLoaderData();
   console.log(course.name)



    return (
        <div className='my-5 text-center container'>
            <div className='d-flex justify-content-between'>
                <h1>{course.name}</h1>
                <Button className='btn-pdf' variant="">Generate PDF</Button>
            </div>
            <hr className='break' />
            <div>
                <img className='w-100 my-5'  src={course.image} alt="" />
            </div>
            <div className=' price-rating-btn d-flex justify-content-between align-items-center mb-5'>
                <h4>Price: ${course.price}</h4>
                <h4 className='text-center'><FaStar className='star'></FaStar> {course.rating}</h4>
                <Button className='btn-pdf' variant="">Get Premium Access</Button>

            </div>
            <div>
                <p className='description text-start text-black'>{course.description}</p>
            </div>
            
        </div>
    );
};

export default Course;