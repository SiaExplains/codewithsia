import React, { Component } from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import SideBarComponent from './sidebar/sidebar';
import AdminArticle from './pages/articles/admin-article';
import FileManagerComponent from './pages/file-manager/file-manager';
import AdminDashboard from './pages/dashboard/dashboard';
import AdminTag from './pages/tags/admin-tags';
import AdminCategories from './pages/categories/admin-categories';
import AdminChangePassword from './pages/change-password/change-password';

export default class AdminPanel extends Component {
    render() {
        if (localStorage.getItem('token') === null) {
            this.props.history.replace('/');
            //this.props.history.push({ to: '/login' });
            return <React.Fragment></React.Fragment>;
        }

        return (
            <div>
                <Router>
                    <div>
                        <div className='col-md-2'>
                            <SideBarComponent />
                        </div>
                        <div className='col-md-10 p-3'>
                            <div>
                                <div>
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
                                            path='/admin/categories'
                                            component={AdminCategories}
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
                                </div>
                            </div>
                            <br />
                            <br />
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
