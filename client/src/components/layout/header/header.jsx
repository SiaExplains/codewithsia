import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import imgLogo from '../../../assets/images/logo.png';
import externalClasses from './header.module.scss';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
    list: {
        width: 250,
    },
    listItem: {
        textAlign: 'center',
    },
    fullList: {
        width: 'auto',
    },
}));

const HeaderComponent = (props) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        redirect: '/',
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const redirectTo = (path) => {
        // return <Redirect to={path} />;
        let history = new useHistory();
        history.push(path);
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <a href='/'>
                    <ListItem button className={classes.listItem}>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </a>
                <a href='/articles'>
                    <ListItem button className={classes.listItem}>
                        <ListItemText primary={'Article'} />
                    </ListItem>
                </a>
                <a href='/videos'>
                    {' '}
                    <ListItem
                        button
                        className={classes.listItem}
                        onClick={() => redirectTo('/videos')}
                    >
                        <ListItemText primary={'Videos'} />
                    </ListItem>
                </a>
                <Divider />
                <a href='/about'>
                    <ListItem
                        button
                        className={classes.listItem}
                        onClick={() => redirectTo('/about')}
                    >
                        <ListItemText primary={'About Me'} />
                    </ListItem>
                </a>
                <a href='/contact'>
                    <ListItem
                        button
                        className={classes.listItem}
                        onClick={() => redirectTo('/contact')}
                    >
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </a>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <Drawer
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
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
                        onClick={toggleDrawer('right', true)}
                        aria-label='open drawer'
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderComponent;
