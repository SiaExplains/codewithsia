import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SampleCss extends Component {
    render() {
        return (
            <div>
                <Link to='/labs/css/flexbox'>CSS - Flexbox</Link> <br />
                <Link to='/labs/css/gallery-item'>Flexbox - Gallery Items</Link>
                <br />
            </div>
        );
    }
}
