import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSideNav.css'

const RightSideNav = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://north-tech-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3 className='my-5 our-courses'>All Courses: {courses.length}</h3>

            <div>
                {
                    courses.map(course => <p className='right-side-title' key={course.id}><Link className='right-course-title' to={`/courses/${course.id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;