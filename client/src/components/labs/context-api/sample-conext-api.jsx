import React, { Component } from 'react';
import SampleContextChild from './sample-context-child';

export const SampleDataContext = React.createContext('siavash');
export default class SampleContextAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'jack'
        };
    }

    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h2>Context API</h2>
                <br />
                Child received context:
                <br />
                <input
                    name='name'
                    onChange={e => this.inputHandler(e)}
                    value={this.state.name}
                />
                <br />
                <hr />
                <br />
                <SampleDataContext.Provider value={this.state.name}>
                    <SampleContextChild />
                </SampleDataContext.Provider>
            </div>
        );
    }
}
