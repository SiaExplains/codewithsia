import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import imgLogo from '../../../assets/images/logo.png';
import externalClasses from './header.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    menu: {
        marginLeft: 0,
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        display: 'flex',
    },
    menuItem: {
        color: theme.palette.common.white,
        marginRight: theme.spacing(2),
        display: 'none',
        fontSize: '1rem',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function HeaderComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={externalClasses.root}>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' noWrap>
                        <img src={imgLogo} className={externalClasses.logo} />
                        CodewithSia
                    </Typography>

                    <div className={classes.menu}>
                        <Link to='/articles' className={classes.menuItem}>
                            Articles
                        </Link>
                        <Link to='/videos' className={classes.menuItem}>
                            Videos
                        </Link>
                        <Link to='/about' className={classes.menuItem}>
                            About Me
                        </Link>
                        <Link to='/contact' className={classes.menuItem}>
                            Contact
                        </Link>
                        <Link to='/' className={classes.menuItem}>
                            <HomeIcon />
                        </Link>
                    </div>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='open drawer'
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
