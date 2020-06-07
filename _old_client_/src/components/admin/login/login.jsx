import React, { Component } from 'react';
import {
    Container,
    CardBody,
    FormGroup,
    Card,
    CardTitle,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';
import { loginUser } from '../../../services/users';
import Snackbar from '@material-ui/core/Snackbar';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            snakOpen: false,
            message: ''
        };
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleLogin = () => {
        loginUser({
            UserName: this.state.userName,
            Password: this.state.password
        })
            .then(result => {
                localStorage.setItem('token', result.data);
                this.props.history.replace('/admin');
                console.log(result);
            })
            .catch(err => {
                this.setState({
                    snakOpen: true,
                    message: err.response.data.Error
                });
            });
    };

    handleClose = () => {
        this.setState({
            snakOpen: false
        });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col className='mt-4'>
                        <Card>
                            <CardTitle className='bg-info text-white text-center'>
                                &nbsp;
                                <br />
                                CodeWithSia Login to Dashboard &nbsp;
                                <br />
                                &nbsp;
                                <br />
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Label>User name:</Label>
                                    <Input
                                        name='userName'
                                        onChange={this.handleInput}
                                        value={this.state.userName}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password:</Label>
                                    <Input
                                        password='true'
                                        type='password'
                                        name='password'
                                        onChange={this.handleInput}
                                        value={this.state.password}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button
                                        color='primary'
                                        onClick={this.handleLogin}
                                    >
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
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default LoginComponent;
