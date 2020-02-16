import React, { Component } from 'react';
import { SampleDataContext } from './SampleContextAPI';

export default class SampleContextChild extends Component {
    render() {
        return (
            <div>
                <h2>child</h2>
                data:
                <br />
                <SampleDataContext.Consumer>
                    {data => <p>data is: {data}</p>}
                </SampleDataContext.Consumer>
            </div>
        );
    }
}
