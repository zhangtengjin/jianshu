/*
* @Author: 12574
* @Date:   2018-10-22 11:32:51
* @Last Modified by:   12574
* @Last Modified time: 2018-10-22 15:34:54
*/
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

// 使用redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;