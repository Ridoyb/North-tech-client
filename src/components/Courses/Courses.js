import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from './RightSideNav';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();
    const {id, name, price,description,image,ratings}=courses;
    console.log(name)
    return (
        <Container>
            <Row>
                
                <Col lg="3"><RightSideNav></RightSideNav></Col>
                <Col lg="9">
                    <h2 className='text-center mt-5'>Our Courses</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;