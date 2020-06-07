import React, { Component } from 'react';
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
            <div>
                <div className='p-3'>
                    <div>
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
                                <span color='info'>
                                    September 2009 to july 2012
                                </span>
                            </li>
                            <li>
                                Associate Degree of Computer Science, Islamic
                                Azad University &nbsp;
                                <span color='success'>
                                    September 2006 to July 2009{' '}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='p-3'>
                    <div>
                        <h2 style={newStyleBasedonRadium}>Certifications</h2>
                        <br />
                        <ul>
                            <li>
                                Git Starter course, Udemy / CERT-ID: UC-597NOQ46
                                &nbsp;<span color='info'>June 2019 </span>
                            </li>
                            <li>
                                CSS Fundamentals course, Solo-learn / CERT-ID:
                                #1023-14416357 &nbsp;
                                <span color='info'>June 2019</span>
                            </li>
                            <li>
                                JavaScript Tutorial course, Solo-learn /
                                cert-ID: #1024-14416357&nbsp;
                                <span color='info'>June 2019</span>
                            </li>
                            <li>
                                HTML Fundamentals course, Solo-learn / cert-ID:
                                #1014-14416357&nbsp;
                                <span color='success'>May 2019</span>
                            </li>
                            <li>
                                Microsoft ASP.NET Core (MVA), microsoft virtual
                                academy&nbsp;
                                <span color='primary'>September 2018</span>
                            </li>
                            <li>
                                Future of Robotics Workshop, Payame Noor
                                University – PNU&nbsp;
                                <span color='dark'>December 2011</span>
                            </li>
                            <li>
                                Future of the Robots Workshop, Payame Noor
                                University – PNU&nbsp;
                                <span color='dark'>December 2011</span>
                            </li>
                            <li>
                                3Ds MAX Workshop - Full Course, Islamic Azad
                                University&nbsp;
                                <span color='dark'>December 2011</span>
                            </li>
                            <li>
                                Certificate of participate, ITEX 2008, Kuala
                                Lumpur, Malaysian Invention and Design Society
                                (USA)&nbsp;
                                <span color='warning'>May 2008</span>
                            </li>
                            <li>
                                Advanced Visual Basic Course, Iran Technical &
                                Vocational Training / Cert-id:
                                1876068/79000092&nbsp;
                                <span color='danger'>May 2006</span>
                            </li>
                            <li>
                                CompTIA A+, Tehran Institute of Technology/
                                Cert-id: 112-3855 / 16104&nbsp;
                                <span color='info'>January 2006</span>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(About);
