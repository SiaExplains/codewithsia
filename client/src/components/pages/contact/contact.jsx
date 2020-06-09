import React, { Component } from 'react';

import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from './contact.module.scss';
import Underline from '../../common/underline/underline';
import Subject from '../../common/subject/subject';
import { TextField, IconButton, Button } from '@material-ui/core';
import {
    LinkedIn,
    YouTube,
    GitHub,
    Code,
    Instagram,
    Twitter,
} from '@material-ui/icons';

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
        const socials = [
            {
                link: 'https://www.linkedin.com/in/siavash-ghanbari-b2406888/',
                icon: <LinkedIn />,
            },
            {
                link: 'https://stackoverflow.com/users/1404642/siavash',
                icon: <Code />,
            },
            {
                link: 'https://github.com/SiaQnbr',
                icon: <GitHub />,
            },
            {
                link: 'https://www.instagram.com/codewithsia/?hl=en',
                icon: <Instagram />,
            },
            {
                link: 'https://t.me/codewithsia',
                icon: <Twitter />,
            },
            {
                link:
                    'https://www.youtube.com/channel/UCuduC1Cxu6gfRoCb1ACznBA',
                icon: <YouTube />,
            },
        ].map((social) => {
            return (
                <IconButton
                    color='secondary'
                    title='LinkedIn'
                    target='_blank'
                    href={social.link}
                >
                    {social.icon}
                </IconButton>
            );
        });

        const contactDetails = (
            <div className={classes.contact}>
                <Subject title='Contact ME' />
                <Underline />
                <strong>+49 157 345 89750</strong>
                <strong>Einbecker str. 78 Berlin, Germany</strong>
                <strong>sia.qnbr(@t)gmail(d0t)com</strong>
                <br />
                <div>
                    <div className={classes.socials}> {socials}</div>
                </div>
            </div>
        );

        const messageForm = (
            <div className={classes.message}>
                <Subject title='Say Hello!' />
                <Underline />
                <TextField label='title' />
                <TextField label='email' />
                <TextField
                    id='outlined-multiline-static'
                    label='Multiline'
                    multiline
                    rows={4}
                />
                <Button color='secondary'>Send you Message</Button>
            </div>
        );

        const position = [this.state.lat, this.state.lng];

        return (
            <div className={classes.root}>
                <div className={classes['responsive-box']}>
                    <div className={classes.boxTop}>
                        {contactDetails}
                        {messageForm}
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>&nbsp;</span>
            </div>
        );
    }
}

export default Contact;
