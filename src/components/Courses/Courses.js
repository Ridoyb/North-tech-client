import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RightSideNav from './RightSideNav';
import { useState } from 'react';
import { useEffect } from 'react';
import './Courses.css'


const Courses = () => {
    const [courses, setCourses]= useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then (data => setCourses(data))
    }, [])


    
    return (
        <Container>
            <Row>
                
                <Col lg="3"><RightSideNav></RightSideNav></Col>
                <Col lg="9">
                    <h2 className='text-center mt-5'>Our Courses: {courses.length}</h2>
                   
                   <div className='course-card mt-5 mb-5 d-grid' >
                   {
                        courses.map(course => <div >
                            <Card  style={{ width: '20rem' }} key={course.id}>
                                <Card.Img variant="top" src={course.image} />
                                <Card.Body>
                                <div className='card-title-btn'>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Button variant="" className='btn-start' href={`/courses/${course.id}`}>Start</Button>
                                </div>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                   </div>
                   
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;