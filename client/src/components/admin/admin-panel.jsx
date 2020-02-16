import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideBarComponent from './sidebar/sidebar';
import AdminArticle from './pages/articles/admin-article';
import FileManagerComponent from './pages/file-manager/file-manager';
import AdminDashboard from './pages/dashboard/dashboard';
import AdminTag from './pages/tags/admin-tags';
import AdminChangePassword from './pages/change-password/change-password';

export default class AdminPanel extends Component {
    render() {
        if (localStorage.getItem('token') === null) {
            this.props.history.replace('/');
            //history.push('/');
            return <React.Fragment></React.Fragment>;
        }

        return (
            <Container fluid>
                <Router>
                    <Row>
                        <Col className='col-md-2'>
                            <SideBarComponent />
                        </Col>
                        <Col className='col-md-10 p-3'>
                            <Row>
                                <Col>
                                    <Switch>
                                        <Route
                                            path='/admin/articles'
                                            component={AdminArticle}
                                        />
                                        <Route
                                            path='/admin/tags'
                                            component={AdminTag}
                                        />
                                        <Route
                                            path='/admin/file-manager/'
                                            component={FileManagerComponent}
                                        />
                                        <Route
                                            path='/admin/change-password/'
                                            component={AdminChangePassword}
                                        />
                                        <Route
                                            path='/admin'
                                            exact
                                            component={AdminDashboard}
                                        ></Route>
                                    </Switch>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Router>
            </Container>
        );
    }
}
