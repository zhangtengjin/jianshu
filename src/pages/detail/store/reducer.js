/*
* @Author: 12574
* @Date:   2018-11-07 10:27:28
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 10:52:26
*/
import { fromJS } from 'immutable';
import * as constants from './constants.js';
const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state
    }
}

