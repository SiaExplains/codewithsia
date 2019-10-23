import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                
                    <Link to="/">Home</Link> &nbsp;&nbsp;
                    <Link to="/articles">Articles</Link> &nbsp;&nbsp;
                    <Link to="/projects">Projects</Link> &nbsp;&nbsp;
                    <Link to="/awards">Awards</Link> &nbsp;&nbsp;
                    <Link to="/manifest">Manifest</Link> &nbsp;&nbsp;
                    <Link to="/about">About</Link> &nbsp;&nbsp;
                    <Link to="/contact">Contact</Link> &nbsp;&nbsp;
                
            </div>
        )
    }
}
export default Header;