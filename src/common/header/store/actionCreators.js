/*
* @Author: 12574
* @Date:   2018-09-14 14:07:12
* @Last Modified by:   12574
* @Last Modified time: 2018-11-08 16:50:04
*/

import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';


const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
        axios.get('http://localhost:9000/api/headerList.json').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(changeList(data.data));
        }).catch(() => {
        })
    }
}

export const changeBackground = () => ({
    type: constants.CHANGE_BACKGROUND
})