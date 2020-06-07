import React, { Component } from 'react';
import './projects.css';

export default class Projects extends Component {
    componentDidMount() {
        document.title = `Projects | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    render() {
        return (
            <div>
                <span>Projects</span>
            </div>
        );
    }
}
