import React from 'react';
import './hr-line.css';

export default function HRLine(props) {
    const { type } = props;
    return (
        <React.Fragment>
            <hr className={type} style={{ width: props.width }} />
        </React.Fragment>
    );
}

HRLine.defaultProps = {
    width: '50%'
};
