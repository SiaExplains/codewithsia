import React, { Component } from 'react';
import imgProfile from '../../../assets/images/profile.jpg';
import Container from '@material-ui/core/Container';
import { Box, Grid } from '@material-ui/core';
import { palette } from '@material-ui/system';
import style from './home.module.css';
class Home extends Component {
    componentDidMount() {
        document.title = `Home | ${process.env.REACT_APP_DOC_TITLE}`;
    }
    render() {
        return (
            <Box display='flex' flexDirection='column'>
                <Box
                    display='flex'
                    flexDirection='column'
                    className={style['box-top']}
                >
                    <Box
                        justifyContent='center'
                        display='flex'
                        className={style['box-brand']}
                    >
                        <strong>CODE WITH SIA</strong>
                    </Box>
                    <Box
                        justifyContent='center'
                        display='flex'
                        className={style['box-brand-large']}
                    >
                        <div>
                            I'm trying to share my experiences with you in
                            software development.
                        </div>
                    </Box>
                </Box>
                <Box></Box>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1'>
                        <Box
                            justifyContent='center'
                            display='flex'
                            className={style['title']}
                        >
                            <br />
                            Categories
                        </Box>

                        <Box display='flex' flexDirection='column'>
                            <Box display='flex'>
                                <iframe
                                    width='300'
                                    src='https://www.youtube.com/embed/RxXOcl8qibg'
                                    frameborder='0'
                                    allowfullscreen=''
                                ></iframe>
                            </Box>
                            <Box display='flex'>
                                <iframe
                                    width='300'
                                    src='https://www.youtube.com/embed/RxXOcl8qibg'
                                    frameborder='0'
                                    allowfullscreen=''
                                ></iframe>
                            </Box>
                            <Box display='flex'>
                                <iframe
                                    width='300'
                                    src='https://www.youtube.com/embed/RxXOcl8qibg'
                                    frameborder='0'
                                    allowfullscreen=''
                                ></iframe>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex='3'></Box>
                </Box>
            </Box>
        );
    }
}

export default Home;
