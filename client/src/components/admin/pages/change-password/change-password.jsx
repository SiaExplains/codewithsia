import React, { Component } from 'react';
import {
    Container,
    Button,
    Row,
    Input,
    Label,
    Col,
    FormGroup
} from 'reactstrap';
import { toast } from 'react-toastify';

class AdminChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old: '',
            pass: '',
            repeat: ''
        };
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChangePassword = () => {
        toast.success('OKAY');
    };

    render() {
        let { old, pass, repeat } = this.state;
        return (
            <Container>
                <Row>
                    <FormGroup style={{ width: '100%' }}>
                        <Label>Old Password: </Label>
                        <Input
                            value={old}
                            onChange={this.handleInput}
                            name='old'
                        ></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup style={{ width: '100%' }}>
                        <Label>New Password: </Label>
                        <Input
                            value={pass}
                            onChange={this.handleInput}
                            name='pass'
                        ></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup style={{ width: '100%' }}>
                        <Label>Repeat Password: </Label>
                        <Input
                            value={repeat}
                            onChange={this.handleInput}
                            name='repeat'
                        ></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <Col>
                        <Button
                            color='success'
                            onClick={this.handleChangePassword}
                        >
                            Change Password
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AdminChangePassword;
