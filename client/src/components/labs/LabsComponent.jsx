import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Col, Row } from 'reactstrap';
import SamplePropTypes from './prop-types/SamplePropTypes';
import SampleHOC from './hoc/SampleHOC';
import SamplePromise from './promises/SamplePromise';
import SampleRefs from './refs/SampleRefs';
import SampleContextAPI from './context-api/SampleContextAPI';

class LabsComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h2>Laboratory</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-3'>
                                <MenuList>
                                    <MenuItem>
                                        <Link to='/labs/promise'>Promises</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/hoc'>HOC</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/ref'>ref</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/prop-types'>
                                            PropTypes
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/context-api'>
                                            ContextAPI
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </Col>
                            <Col className='col-9'>
                                <Route
                                    path='/labs/promise'
                                    component={SamplePromise}
                                />
                                <Route path='/labs/hoc' component={SampleHOC} />
                                <Route
                                    path='/labs/ref'
                                    component={SampleRefs}
                                />
                                <Route
                                    path='/labs/prop-types'
                                    component={SamplePropTypes}
                                />
                                <Route
                                    path='/labs/context-api'
                                    component={SampleContextAPI}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Switch>
            </Router>
        );
    }
}

export default LabsComponent;
