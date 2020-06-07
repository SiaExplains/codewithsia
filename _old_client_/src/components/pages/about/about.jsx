import React, { Component } from 'react';
import { Row, Col, Container, Badge } from 'reactstrap';
import Radium from 'radium';

class About extends Component {
    componentDidMount() {
        document.title = `About | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    render() {
        const newStyleBasedonRadium = {
            backgroundColor: 'white',
            color: 'blue',
            ':hover': {
                backgroundColor: 'whitesmoke',
            },
        };

        return (
            <Container>
                <Row className='p-3'>
                    <Col>
                        <br />
                        <h2>About Siavash!</h2>
                        <p className='text-justify pr-4'>
                            Working in a variety of projects as back-end and
                            front-end developer, with strong analytical skills
                            and a broad range of computer expertise give me a
                            good understanding and knowledge of analysis and
                            design, coding, testing and deployment and also made
                            me a strong problem-solver, who is able to quickly
                            grasp complex systems and identify opportunities for
                            improvements and resolution of critical issues and
                            also taught me how to be a team member, skilled in
                            enlisting the support of all team members in
                            aligning with project and organizational goals.
                        </p>
                        <h2>Educations</h2>
                        <ul>
                            <li>
                                BACHELOR DEGREE OF COMPUTER (SOFTWARE),
                                University of Science and Technology of
                                Mazandaran &nbsp;
                                <Badge color='info'>
                                    September 2009 to july 2012
                                </Badge>
                            </li>
                            <li>
                                Associate Degree of Computer Science, Islamic
                                Azad University &nbsp;
                                <Badge color='success'>
                                    September 2006 to July 2009{' '}
                                </Badge>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='p-3'>
                    <Col>
                        <h2 style={newStyleBasedonRadium}>Certifications</h2>
                        <br />
                        <ul>
                            <li>
                                Git Starter course, Udemy / CERT-ID: UC-597NOQ46
                                &nbsp;<Badge color='info'>June 2019 </Badge>
                            </li>
                            <li>
                                CSS Fundamentals course, Solo-learn / CERT-ID:
                                #1023-14416357 &nbsp;
                                <Badge color='info'>June 2019</Badge>
                            </li>
                            <li>
                                JavaScript Tutorial course, Solo-learn /
                                cert-ID: #1024-14416357&nbsp;
                                <Badge color='info'>June 2019</Badge>
                            </li>
                            <li>
                                HTML Fundamentals course, Solo-learn / cert-ID:
                                #1014-14416357&nbsp;
                                <Badge color='success'>May 2019</Badge>
                            </li>
                            <li>
                                Microsoft ASP.NET Core (MVA), microsoft virtual
                                academy&nbsp;
                                <Badge color='primary'>September 2018</Badge>
                            </li>
                            <li>
                                Future of Robotics Workshop, Payame Noor
                                University – PNU&nbsp;
                                <Badge color='dark'>December 2011</Badge>
                            </li>
                            <li>
                                Future of the Robots Workshop, Payame Noor
                                University – PNU&nbsp;
                                <Badge color='dark'>December 2011</Badge>
                            </li>
                            <li>
                                3Ds MAX Workshop - Full Course, Islamic Azad
                                University&nbsp;
                                <Badge color='dark'>December 2011</Badge>
                            </li>
                            <li>
                                Certificate of participate, ITEX 2008, Kuala
                                Lumpur, Malaysian Invention and Design Society
                                (USA)&nbsp;
                                <Badge color='warning'>May 2008</Badge>
                            </li>
                            <li>
                                Advanced Visual Basic Course, Iran Technical &
                                Vocational Training / Cert-id:
                                1876068/79000092&nbsp;
                                <Badge color='danger'>May 2006</Badge>
                            </li>
                            <li>
                                CompTIA A+, Tehran Institute of Technology/
                                Cert-id: 112-3855 / 16104&nbsp;
                                <Badge color='info'>January 2006</Badge>
                            </li>
                        </ul>
                        <h2>Publications</h2>
                        <ul>
                            <li>
                                Modeling and simulation of traffic lights and
                                controller unit systems by colored Petri net,
                                Academic Journals / December 2011 /
                                <span className='text-danger small'>
                                    ISSN: 1992-1950 / DOI: 10.5897/IJPS11.968
                                </span>
                            </li>
                        </ul>
                        <h2>Patents</h2>
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
                        <br />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Radium(About);