import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Badge,
} from 'reactstrap';
import imageLogmog from '../../../assets/images/projects/logmog.png';
import imageCalmal from '../../../assets/images/projects/calmal.png';
import imageSelfculator from '../../../assets/images/projects/selfculator.png';
import imageShopmop from '../../../assets/images/projects/shopmop.png';
import imageNiazvand from '../../../assets/images/projects/niazvand.png';

import './projects.css';

export default class Projects extends Component {
    componentDidMount() {
        document.title = `Projects | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    render() {
        return (
            <Container className='p-3'>
                <Container className='project-box'>
                    <Row className='p-3'>
                        <h3>Open-Source Projects</h3>
                    </Row>
                    <Row>
                        <Col className='d-md-block col-sm-12 col-md-4 col-lg-3'>
                            <Card>
                                <CardImg
                                    top
                                    width='100%'
                                    className='article-image  p-1 m-1 img-fluid'
                                    src={imageLogmog}
                                    alt='Card image cap'
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h3>logmog</h3>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>
                                            <Badge color='success'>
                                                javascript library
                                            </Badge>
                                        </h6>
                                    </CardSubtitle>
                                    <CardText>
                                        Logmog is an open-source javascript
                                        logging library which is suitable for
                                        all kinds of javascript apps, such as
                                        reactjs, nodejs, electron, etc.
                                    </CardText>
                                    <a
                                        href='https://www.npmjs.com/package/logmog'
                                        className='btn btn-sm btn-primary'
                                    >
                                        More information
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='d-md-block col-sm-12 col-md-4 col-lg-3'>
                            <Card>
                                <CardImg
                                    top
                                    width='100%'
                                    className='article-image  p-1 m-1 img-fluid '
                                    src={imageSelfculator}
                                    alt='Card image cap'
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h3>selfculator</h3>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>
                                            <Badge color='danger'>
                                                web-app
                                            </Badge>
                                        </h6>
                                    </CardSubtitle>
                                    <CardText>
                                        Logmog is an open-source javascript
                                        logging library which is suitable for
                                        all kinds of javascript apps, such as
                                        reactjs, nodejs, electron, etc.
                                    </CardText>
                                    <a
                                        href='https://www.npmjs.com/package/logmog'
                                        className='btn btn-sm btn-primary'
                                    >
                                        More information
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className='d-md-block col-sm-12 col-md-4 col-lg-3'>
                            <Card>
                                <CardImg
                                    top
                                    width='100%'
                                    className='article-image  p-1 m-1 img-fluid '
                                    src={imageShopmop}
                                    alt='Card image cap'
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h3>shopmop</h3>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>
                                            <Badge color='danger'>
                                                e-commerce app
                                            </Badge>
                                        </h6>
                                    </CardSubtitle>
                                    <CardText>
                                        calmal is a persian calendar with a lot
                                        of language/region features.
                                    </CardText>
                                    <a
                                        href='https://www.npmjs.com/package/calmal'
                                        className='btn btn-sm btn-primary'
                                    >
                                        More information
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className='d-md-block col-sm-12 col-md-4 col-lg-3'>
                            <Card>
                                <CardImg
                                    top
                                    width='100%'
                                    className='article-image  p-1 m-1 img-fluid '
                                    src={imageCalmal}
                                    alt='Card image cap'
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h3>calmal</h3>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>
                                            <Badge color='success'>
                                                javascript library
                                            </Badge>
                                        </h6>
                                    </CardSubtitle>
                                    <CardText>
                                        calmal is a persian calendar with a lot
                                        of language/region features.
                                    </CardText>
                                    <a
                                        href='https://www.npmjs.com/package/calmal'
                                        className='btn btn-sm btn-primary'
                                    >
                                        More information
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container className='project-box'>
                    <Container fluid>
                        <Row className='p-3'>
                            <h3>Startups</h3>
                        </Row>
                        <Row className=''>
                            <Col className='d-none d-md-block' md='4' lg='3'>
                                <img
                                    className='article-image  p-1 m-1 img-fluid'
                                    src={imageNiazvand}
                                    alt='Niazvand'
                                />
                            </Col>
                            <Col
                                className='thumbnail'
                                sm='12'
                                md='8'
                                lg='9'
                                thumbnail
                            >
                                <h4>Niazvand</h4>
                                <h6>
                                    Niazvand is aplatform for selling/buying
                                    second-hands stuffs.
                                    <br /> <br />
                                    Technologies: &nbsp; Reatcjs, Nodejs,
                                    ExpresJs, PostgreSQL
                                </h6>
                                Github Repo: &nbsp;
                                <a href='https://github.com/SiaQnbr/niazvand'>
                                    github.com/SiaQnbr/niazvand
                                </a>
                                <br />
                                Webiste: &nbsp;
                                <a href='http://niazvand.com'>Niazvand!</a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        );
    }
}
