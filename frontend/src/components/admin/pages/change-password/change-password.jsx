import React, { Component } from 'react';
import { Snackbar, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';

class AdminChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old: '',
            pass: '',
            repeat: '',
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleChangePassword = () => {
        toast.success('OKAY');
    };

    render() {
        let { old, pass, repeat } = this.state;
        return (
            <div>
                <div>
                    <div style={{ width: '100%' }}>
                        <div>Old Password: </div>
                        <TextField
                            value={old}
                            onChange={this.handleInput}
                            name='old'
                        ></TextField>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100%' }}>
                        <div>New Password: </div>
                        <TextField
                            value={pass}
                            onChange={this.handleInput}
                            name='pass'
                        ></TextField>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100%' }}>
                        <div>Repeat Password: </div>
                        <TextField
                            value={repeat}
                            onChange={this.handleInput}
                            name='repeat'
                        ></TextField>
                    </div>
                </div>
                <div>
                    <div>
                        <Button
                            color='success'
                            onClick={this.handleChangePassword}
                        >
                            Change Password
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminChangePassword;
