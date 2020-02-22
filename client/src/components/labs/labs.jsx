import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Col, Row } from 'reactstrap';
import SamplePropTypes from './prop-types/sample-proptypes';
import SampleHOC from './hoc/sample-hoc';
import SamplePromise from './promises/sample-promise';
import SampleRefs from './refs/sample-refs';
import SampleContextAPI from './context-api/sample-conext-api';
import { Divider } from '@material-ui/core';
import SampleCss from './css/sample-css';
import SampleCssFlexBox from './css/flex-box/sample-css-flexbox';
import SampleGalleryItem from './css/gallery-item/sample-gallery-item';

class LabsComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Container fluid className='p-4'>
                        <Row>
                            <Col>
                                <h5>Technical Laboratory</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-2 border'>
                                <MenuList>
                                    <MenuItem>
                                        <Link to='/labs/promise'>Promises</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/hoc'>HOC</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/pure-component'>
                                            Pure Component
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/lifecycle-hook'>
                                            Lifecycle Hook
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/ref'>refs</Link>
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
                                    <MenuItem>--------------------</MenuItem>
                                    <MenuItem>
                                        <Link to='/labs/css'>
                                            CSS / Styling
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </Col>
                            <Col className='col-10 border'>
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
                                <Route
                                    path='/labs/css'
                                    exact
                                    component={SampleCss}
                                />
                                <Route
                                    path='/labs/css/flexbox'
                                    component={SampleCssFlexBox}
                                />
                                <Route
                                    path='/labs/css/gallery-item'
                                    component={SampleGalleryItem}
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
