import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default class SampleMaterial extends Component {
    state = {
        open: false
    };

    handleCloseSnakBar = () => {
        this.setState({
            open: false
        });
    };
    handleOpenSnackBar = () => {
        this.setState({
            open: true
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleOpenSnackBar}></button>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleCloseSnakBar}
                    message='I love snacks'
                />
            </div>
        );
    }
}
