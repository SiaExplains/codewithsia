import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainAppComponent from './components/main-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './features/articles/config-store';
import defaultState from './features/articles/default-state';
import { Provider } from 'react-redux';
const store = configureStore(defaultState);

ReactDOM.render(
    <Provider store={store}>
        <MainAppComponent />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
