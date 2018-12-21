/*
* @Author: 12574
* @Date:   2018-10-22 11:33:03
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 10:35:15
*/

import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as detailReducer } from '../pages/detail/store';
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer,
    detail: detailReducer
})
export default reducer;