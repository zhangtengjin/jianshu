/*
* @Author: 12574
* @Date:   2018-09-14 13:55:34
* @Last Modified by:   12574
* @Last Modified time: 2018-11-08 16:53:42
*/

import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    bgcStyle: {
        backgroundColor: "yellow"
    }
});

export default (state = defaultState, action) => {
		// immutabl的set方法会结合之前对象的值和设置的值返回一个全新的对象

        // 没有使用immutable,不能直接修改state,而是返回新的state
        // return {
        //     focused: true
        // }
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        case constants.CHANGE_BACKGROUND:
            return state.set()
        default:
            return state;
    }
}