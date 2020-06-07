import React, { Component } from 'react';
import { TextFiled } from '@material-ui/core';

class FdItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
        this.chkRef = React.createRef();
    }

    onItemSelectedChange = (e) => {
        this.setState({
            isChecked: e.target.checked,
        });
        this.props.onItemSelectedChange(this.props.data, e.target.checked);
    };
    render() {
        const { data } = this.props;

        return (
            <div
                key={data.key}
                className={`item ${data.type === 'dir' ? 'dir' : ''}`}
                onClick={() => this.props.onItemClick(data)}
            >
                {data.name}
                &nbsp;
                <TextFiled
                    addon
                    ref={this.chkRef}
                    checked={this.state.isChecked}
                    onChange={(e) => this.onItemSelectedChange(e)}
                    type='checkbox'
                />
            </div>
        );
    }
}

export default FdItem;
