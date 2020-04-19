import React, { Component } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import './header.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Row,
    Container,
    NavItem,
    UncontrolledDropdown,
    NavLink,
    Button
} from 'reactstrap';
import logoTextImage from '../../../assets/images/logo-text.png';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false
    };
    toggle = () => {
        let { isOpen } = this.state;
        isOpen = !isOpen;
        this.setState({
            isOpen
        });
        console.log(isOpen);
    };

    singupCourseHandler = () => {
        this.props.history.push('/signup-courses/');
    };

    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>
                    <img
                        alt='logo'
                        src={logoTextImage}
                        className='img-text-logo'
                    />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink
                                to='/'
                                activeClassName='mya'
                                tag={RRNavLink}
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='/articles'
                                activeClassName='mya'
                                tag={RRNavLink}
                            >
                                Articles
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeClassName='mya'
                                to={{
                                    pathname: '/projects'
                                }}
                                activeClassName='active'
                                tag={RRNavLink}
                            >
                                Projects
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                to='/awards'
                                activeClassName='mya'
                                tag={RRNavLink}
                            >
                                Awards
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='/about'
                                activeClassName='mya'
                                tag={RRNavLink}
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='/contact'
                                activeClassName='mya'
                                tag={RRNavLink}
                            >
                                Contact
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <Link
                                to='/signup-courses/'
                                className='button-signup btn btn-md btn-primary pull-right btn-lg rounded-pill'
                            >
                                Singup
                            </Link>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
