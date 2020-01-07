import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AdminDashboard extends Component {
    render() {
        return (
            <Container className='p-3'>
                <Row>
                    <Col>
                        <h3>Admin Dashboard</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/admin/articles' className='btn-primary btn'>
                            Article Managament
                        </Link>
                        &nbsp;
                        <Link to='/admin/messages' className='btn-info btn'>
                            Messages
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
