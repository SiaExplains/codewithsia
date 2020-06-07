import { createStore } from 'redux';
import reducer from './reducer';

export default defaultState => {
    const store = createStore(reducer, defaultState);
    return store;
};
