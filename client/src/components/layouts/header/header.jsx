import React, { Component } from 'react'
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href='#'>Home</a> &nbsp;&nbsp;
                <a href='#'>Articles</a> &nbsp;&nbsp;
                <a href='#'>Projects</a> &nbsp;&nbsp;
                <a href='#'>Awards</a> &nbsp;&nbsp;
                <a href='#'>Manifest</a> &nbsp;&nbsp;
                <a href='#'>About</a> &nbsp;&nbsp;
                <a href='#'>Contact</a>
            </div>
        )
    }
}
export default Header;