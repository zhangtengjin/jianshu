/*
* @Author: 12574
* @Date:   2018-11-07 10:27:06
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 11:30:22
*/
import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title,content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            // console.log(result.title);
            dispatch(changeDetail(result.title,result.content))
        })
    }
}