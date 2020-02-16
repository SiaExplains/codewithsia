import React, { Component } from 'react';
import './home.css';
import { Label, Row, Col, Container } from 'reactstrap';
import imgProfile from '../../../assets/images/profile.jpg';

class Home extends Component {
    componentDidMount() {
        document.title = `Home | ${process.env.REACT_APP_DOC_TITLE}`;
    }
    render() {
        return (
            <Container
                fluid
                className='lato-font text-white align-content-center align-items-center text-center'
            >
                <div className='gradient-box' role='banner'>
                    <span>
                        <h4>
                            “In learning you will teach, and in teaching you
                            will learn.”
                        </h4>
                        <h5>― Phil Collins</h5>
                    </span>
                    <hr style={{ width: '30%' }} />
                    <Label>
                        <h1>Welcome to Code with Sia!</h1>
                    </Label>
                </div>
                <div>
                    <Row>
                        <Col xs='0' sm='1' md='2' lg='3'></Col>
                        <Col
                            className='col-image '
                            xs='12'
                            sm='10'
                            md='8'
                            lg='6'
                        >
                            <img
                                alt='codewithsia profile'
                                src={imgProfile}
                                className='img-fluid my-image'
                            />
                            <p className='text-dark'>
                                My name is Siavash Ghanbari. I'm a Senior
                                FULL-STACK software developer!
                                <br />
                                My life’s mission is to help, and teach novice
                                and expert software developers to increase their
                                skills.
                            </p>
                        </Col>
                        <Col xs='0' sm='1' md='2' lg='3'></Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Home;
