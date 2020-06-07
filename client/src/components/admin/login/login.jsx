import React, { Component } from 'react';
import { loginUser } from '../../../services/users';
import { Snackbar, TextField, Button } from '@material-ui/core';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            snakOpen: false,
            message: '',
        };
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleLogin = () => {
        loginUser({
            UserName: this.state.userName,
            Password: this.state.password,
        })
            .then((result) => {
                localStorage.setItem('token', result.data);
                this.props.history.replace('/admin');
                console.log(result);
            })
            .catch((err) => {
                this.setState({
                    snakOpen: true,
                    message: err.response.data.Error,
                });
            });
    };

    handleClose = () => {
        this.setState({
            snakOpen: false,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <span>User name:</span>
                    <TextField
                        name='userName'
                        onChange={this.handleInput}
                        value={this.state.userName}
                    ></TextField>
                </div>
                <div>
                    <span>Password:</span>
                    <TextField
                        password='true'
                        type='password'
                        name='password'
                        onChange={this.handleInput}
                        value={this.state.password}
                    ></TextField>
                </div>
                <div>
                    <Button color='primary' onClick={this.handleLogin}>
                        Login
                    </Button>
                    &nbsp;
                    <Button color='success'>Signup</Button>
                    <Snackbar
                        open={this.state.snakOpen}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        message={this.state.message}
                    ></Snackbar>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
