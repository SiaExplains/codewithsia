import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import './sidebar.css';
import profileImage from '../../../assets/images/profile.jpg';

class SideBarComponent extends Component {
    render() {
        return (
            <Nav light='true' className='sidebar'>
                <div className='sidebar-sticky p-2'>
                    <div className='fixed-center text-center'>
                        <img
                            src={profileImage}
                            className='img-thumbnail img-fluid'
                            alt='Siavash Ghanbari'
                        />
                        <span className='card  bg-info shadow user-fullname'>
                            Siavash Ghanbari
                        </span>
                        <p>Senior Full Stack Developer</p>
                    </div>
                </div>
            </Nav>
        );
    }
}

export default SideBarComponent;
