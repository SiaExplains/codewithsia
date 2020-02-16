import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Container,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
// import {
//     faMobileAlt,
//     faLink,
//     faCode,
//     faCodeBranch,
//     faPhotoVideo
// } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import imgPhone from '../../../assets/images/contact/phone.png';
import imgLinkedIn from '../../../assets/images/contact/linkedin.png';
import imgStackoverflow from '../../../assets/images/contact/stackoverflow.png';
import imgGithub from '../../../assets/images/contact/github.png';
import imgInstagram from '../../../assets/images/contact/instagram.png';
import imgTelegram from '../../../assets/images/contact/telegram.png';
import imgTwitter from '../../../assets/images/contact/twitter.png';
import imgYoutube from '../../../assets/images/contact/youtube.png';
import './contact.css';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 52.53,
            lng: 13.46,
            zoom: 13
        };
    }
    componentDidMount() {
        document.title = `Contact | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    clearInputHandler = () => {};
    sendMessageHanfler = () => {
        alert('Your messages has been sent.');
    };
    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <Container className='p-3'>
                <Row>
                    <Col>
                        <h2>Contact me</h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Keep in touch!</h4>
                        <div>
                            <img src={imgPhone} width='32px' height='32px' />
                            &nbsp; +49 157 345-89750 (Berlin)
                        </div>
                        <div>
                            Otto-Marquardt-Straße 18 , 10369 Berlin, Berlin
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className='mt-2'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://www.linkedin.com/in/siavash-ghanbari-b2406888/'
                            >
                                <img
                                    src={imgLinkedIn}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; LinkedIn
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://stackoverflow.com/users/1404642/siavash'
                            >
                                <img
                                    src={imgStackoverflow}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Stackoverflow
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://github.com/SiaQnbr'
                            >
                                <img
                                    src={imgGithub}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Github
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://www.instagram.com/codewithsia/?hl=en'
                            >
                                <img
                                    src={imgInstagram}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Instagram
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://t.me/codewithsia'
                            >
                                <img
                                    src={imgTelegram}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Telegram Channel
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://twitter.com/codewithsia'
                            >
                                <img
                                    src={imgTwitter}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Twitter
                            </a>
                        </div>
                        <div className='mt-1'>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://www.youtube.com/channel/UCAO_gchdNEyBZOuwO5K5Eig?view_as=subscriber'
                            >
                                <img
                                    src={imgYoutube}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Youtube
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <h4>Leave a message</h4>
                        <FormGroup style={{ width: '100%' }}>
                            <Label>Name: </Label>
                            <Input></Input>
                        </FormGroup>
                        <FormGroup style={{ width: '100%' }}>
                            <Label>Subject: </Label>
                            <Input></Input>
                        </FormGroup>
                        <FormGroup style={{ width: '100%' }}>
                            <Label>Email: </Label>
                            <Input></Input>
                        </FormGroup>
                        <FormGroup style={{ width: '100%' }}>
                            <Label>Message: </Label>
                            <textarea
                                width='100%'
                                style={{ width: '100%' }}
                            ></textarea>
                        </FormGroup>
                        <FormGroup>
                            <Button
                                color='success'
                                onClick={this.sendMessageHanfler}
                            >
                                Send
                            </Button>
                            &nbsp;&nbsp;
                            <Button color='info'>Cancel</Button>
                        </FormGroup>
                    </Col>
                    <Col>
                        <LeafletMap
                            style={{ height: '400px', width: '100%' }}
                            center={position}
                            zoom={this.state.zoom}
                        >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            />
                            <Marker position={position}>
                                <Popup>I am here!</Popup>
                            </Marker>
                        </LeafletMap>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
