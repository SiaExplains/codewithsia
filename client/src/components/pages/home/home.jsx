import React, { Component } from 'react';
import './home.css';
import { Label } from 'reactstrap';
class Home extends Component {
    render() {
        return (
            <div>
                <div
                    className='x-intro-section align-content-center align-items-center text-center'
                    role='banner'
                >
                    <div className='x-intro-holder'>
                        <Label className='text-white'>
                            <h1>Welcome to Code with Sia!</h1>
                        </Label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
