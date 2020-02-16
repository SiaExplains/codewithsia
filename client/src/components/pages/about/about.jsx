import React, { Component } from 'react';
import { Row, Container, Badge } from 'reactstrap';
class About extends Component {
    componentDidMount() {
        document.title = `About | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    render() {
        return (
            <Container>
                <Row className='p-3'>
                    <h2>About Siavash!</h2>
                    <p className='text-justify pr-4'>
                        Working in a variety of projects as back-end and
                        front-end developer, with strong analytical skills and a
                        broad range of computer expertise give me a good
                        understanding and knowledge of analysis and design,
                        coding, testing and deployment and also made me a strong
                        problem-solver, who is able to quickly grasp complex
                        systems and identify opportunities for improvements and
                        resolution of critical issues and also taught me how to
                        be a team member, skilled in enlisting the support of
                        all team members in aligning with project and
                        organizational goals.
                    </p>
                    <h2>Educations</h2>
                    <ul>
                        <li>
                            BACHELOR DEGREE OF COMPUTER (SOFTWARE), University
                            of Science and Technology of Mazandaran &nbsp;
                            <Badge color='info'>
                                September 2009 to july 2012
                            </Badge>
                        </li>
                        <li>
                            Associate Degree of Computer Science, Islamic Azad
                            University &nbsp;
                            <Badge color='success'>
                                September 2006 to July 2009{' '}
                            </Badge>
                        </li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <br />
                </Row>
            </Container>
        );
    }
}

export default About;
