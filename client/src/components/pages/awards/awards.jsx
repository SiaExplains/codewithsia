import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class Awards extends Component {
    render() {
        return (
            <Container>
                <Row className='p-3'>
                    <Col>
                        <h2>My awards</h2>
                        <ul>
                            <li>
                                Smart Anti Earthquake Bed for patients at
                                hospital, Intellectual Property Organization
                                &nbsp;
                                <span className='text-danger small'>
                                    {'{'}
                                    Reg-code: 014253 / الف 85
                                    {'}'}
                                </span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
