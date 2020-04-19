import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainAppComponent from './components/main-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './features/articles/config-store';
import defaultState from './features/articles/default-state';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './components/admin/login/login';

const store = configureStore(defaultState);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/login' exact component={LoginComponent} />
                <Route path='/' component={MainAppComponent} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
