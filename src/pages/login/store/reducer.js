/*
* @Author: 12574
* @Date:   2018-10-25 11:25:00
* @Last Modified by:   12574
* @Last Modified time: 2018-10-25 14:15:34
*/
import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login',action.value)
        default:
            return state;
    }
}