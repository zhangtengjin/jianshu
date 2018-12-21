/*
* @Author: 12574
* @Date:   2018-10-23 10:44:15
* @Last Modified by:   12574
* @Last Modified time: 2018-10-26 16:06:29
*/

import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
            "id": 1,
            "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
        }, {
            "id": 2,
            "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
        }, {
            "id": 3,
            "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        }, {
            "id": 4,
            "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        }, {
            "id": 5,
            "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        }],
    articlePage: 1
});

export default (state = defaultState, action) => {
        // immutabl的set方法会结合之前对象的值和设置的值返回一个全新的对象

        // 没有使用immutable,不能直接修改state,而是返回新的state
        // return {
        //     focused: true
        // }
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            })
        case 'add_home_list':
            return state.set('articleList',state.get('articleList').concat(action.list)).set('articlePage',action.nextPage)
        default:
            return state;
    }
}