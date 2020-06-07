import React, { Component } from 'react';

import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Snackbar, TextField, Button } from '@material-ui/core';
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
            zoom: 13,
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
            <div className='p-3'>
                <div>
                    <div>
                        <h2>Contact me</h2>
                        <hr />
                    </div>
                </div>
                <div>
                    <div>
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
                                href='https://www.youtube.com/channel/UCuduC1Cxu6gfRoCb1ACznBA?view_as=subscriber'
                            >
                                <img
                                    src={imgYoutube}
                                    width='32px'
                                    height='32px'
                                />
                                &nbsp; Youtube
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4>Leave a message</h4>
                        <div style={{ width: '100%' }}>
                            <div>Name: </div>
                            <TextField></TextField>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div>Subject: </div>
                            <TextField></TextField>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div>Email: </div>
                            <TextField></TextField>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div>Message: </div>
                            <textarea
                                width='100%'
                                style={{ width: '100%' }}
                            ></textarea>
                        </div>
                        <div>
                            <Button
                                color='success'
                                onClick={this.sendMessageHanfler}
                            >
                                Send
                            </Button>
                            &nbsp;&nbsp;
                            <Button color='info'>Cancel</Button>
                        </div>
                    </div>
                    <div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
