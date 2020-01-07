import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import {
    faMobileAlt,
    faLink,
    faCode,
    faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row className='p-3'>
                    <Col>
                        <h2>Contact me!</h2>

                        <br />
                        <p>
                            <FontAwesomeIcon icon={faMobileAlt} />
                            &nbsp; +98-9120229077
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faLink} />
                            &nbsp;
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://www.linkedin.com/in/siavash-ghanbari-b2406888/'
                            >
                                LinkedIn!
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCode} />
                            &nbsp;
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://stackoverflow.com/users/1404642/siavash'
                            >
                                Stackoverflow
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCodeBranch} />
                            &nbsp;
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://github.com/SiaQnbr'
                            >
                                Github
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
