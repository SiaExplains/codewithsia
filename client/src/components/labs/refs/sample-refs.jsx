import React, { Component } from 'react';

export default class SampleRefs extends Component {
    constructor(props) {
        super(props);
        this.elm3 = React.createRef();
    }

    setFocus = () => {
        this.elm3.current.focus();
    };

    render() {
        return (
            <div>
                <h2>Sample of refs</h2>
                <br />
                <br />
                <button onClick={this.setFocus}>
                    set focus on second input by ref
                </button>
                <br />
                <br />
                <input name='t2' type='text' />
                <br />
                <br />
                <input name='t3' ref={this.elm3} type='text' />
            </div>
        );
    }
}
