/*
* @Author: 12574
* @Date:   2018-10-25 10:28:35
* @Last Modified by:   12574
* @Last Modified time: 2018-10-25 11:18:00
*/
import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants.js';
export const getHomeInfo = () => {
    return (dispatch) => {
         axios.get('http://localhost:9000/api/home.json').then((res) => {
            // console.log(res.data.data.topicList);
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList
            }
            dispatch(action);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('http://localhost:9000/api/homeList.json?page= ' + page).then((res) => {
            // console.log(res.data)
            const result = res.data.data;
            const action = {
                type: 'add_home_list',
                list: fromJS(result),
                nextPage: page +1
            }
            dispatch(action)
        })
    }
}