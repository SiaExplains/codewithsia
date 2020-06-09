import React from 'react';
import classes from './home.module.scss';
import Underline from '../../common/underline/underline';
import Subject from '../../common/subject/subject';
import { Link, Avatar, Chip, Button } from '@material-ui/core';
import imgProfile from '../../../assets/images/profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import cvFile from '../../../assets/cv.pdf';
export default function Home() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            margin: theme.spacing(5),
            width: theme.spacing(25),
            height: theme.spacing(25),
            [theme.breakpoints.up('sm')]: {
                marginTop: theme.spacing(1),
                width: theme.spacing(15),
                height: theme.spacing(15),
            },
        },
        aboutButtons: {
            display: 'flex',
        },
        aboutButton: {
            flex: '1',
        },
    }));

    const internalClasses = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes['content-box']}>
                <Subject title='About Me' />
                <Underline />
                <div className={classes.about}>
                    <div className={classes.aboutme}>
                        <p style={{ textAlign: 'justify' }}>
                            I pay great attention to code quality, software
                            architecture, and team work. Strong analytical
                            skills and a broad range of computer expertise that
                            give me a good understanding and knowledge of
                            analysis, design, coding, testing and deployment. I
                            love new challenges and learning new skills. I
                            consider myself an open and dynamic person. I’m
                            always open to new opportunities and ways of
                            expanding my knowledge. I want to be a part of the
                            development of our future.
                        </p>
                        <br />
                        <div className={internalClasses.aboutButtons}>
                            <Button
                                target='_blank'
                                href={cvFile}
                                variant='outlined'
                                color='secondary'
                            >
                                Download my C.V
                            </Button>
                            &nbsp;
                            <Button
                                href='/about'
                                variant='outlined'
                                color='secondary'
                            >
                                See full bio.
                            </Button>
                        </div>
                    </div>
                    <div class={classes.profile}>
                        <Avatar
                            alt='Remy Sharp'
                            className={internalClasses.large}
                            src={imgProfile}
                        />
                    </div>
                </div>
            </div>

            <div className={classes['content-box']}>
                <Subject title='My Videos' />
                <Underline />
                <br />
                <br />
                <div className={classes.videos}>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/eMDcXW_eA4Q'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.radius}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/yDLAhx3Odg8'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.radius}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/zAIE__KcJbQ'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.radius}
                    ></iframe>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Link href='https://www.youtube.com/channel/UCuduC1Cxu6gfRoCb1ACznBA/'>
                        View full gallery ...
                    </Link>
                </div>
            </div>
            <div className={classes['content-box']}>
                <Subject title='Open Source' />
                <Underline />

                <div className={classes.opensource}>
                    <ul>
                        <li>
                            <h4>randoit</h4>
                            <p>
                                a javascript library that helps to generate
                                random content, such as:
                                <ul>
                                    <li>numbers</li>
                                    <li>characters</li>
                                    <li>term, phrases, sentences</li>
                                    <li>locations (lat,long)</li>
                                    <li>
                                        genreate all functions by weight of
                                        chanse!
                                    </li>
                                </ul>
                                repo:{' '}
                                <Link href='https://github.com/SiaQnbr/randoit'>
                                    randoit
                                </Link>
                            </p>
                        </li>
                        <li>
                            <h4>logmog</h4>
                            <p>
                                logmog is logger for nodejs!
                                <ul>
                                    <li>
                                        ability to write logs by pretty format
                                    </li>
                                    <li>write logs into console</li>
                                    <li>write logs into logfiles</li>
                                    <li>add as a middleware to expressjs</li>
                                    <li>adding as middleware to redux</li>
                                </ul>
                                <br />
                                repo:
                                <Link href='https://github.com/SiaQnbr/logmog'>
                                    logmog
                                </Link>
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h4>listodoit</h4>
                            <p>
                                a todo list application
                                <br />
                                repo:
                                <Link href='https://github.com/SiaQnbr/listodoit'>
                                    listodoit
                                </Link>
                            </p>
                        </li>
                        <li>
                            <h4>kartket</h4>
                            <p>
                                An open-source e-commerce based on nodejs &
                                recatjs.
                                <br />
                                Tools, Languages , Libaries:
                                <br />
                                <Chip label='React' className={classes.chip} />
                                <Chip label='Redux' className={classes.chip} />
                                <Chip label='Nodejs' className={classes.chip} />
                                <Chip
                                    label='Expressjs'
                                    className={classes.chip}
                                />
                                <Chip
                                    label='MongoDB'
                                    className={classes.chip}
                                />
                                <Chip
                                    label='MaterialUI'
                                    className={classes.chip}
                                />
                                <br />
                                repo:
                                <Link href='https://github.com/SiaQnbr/karket'>
                                    kartket
                                </Link>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
