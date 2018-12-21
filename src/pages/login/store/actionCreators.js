/*
* @Author: 12574
* @Date:   2018-10-25 11:24:31
* @Last Modified by:   12574
* @Last Modified time: 2018-11-06 17:44:27
*/
import axios from 'axios';
import * as constants from './constants';
import { message } from 'antd';
const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})


export const login = (account,password) => {
    return (dispatch) => {
        if (account === "admin" && password === "admin123") {
            axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
                const result = res.data.data;
                const account = result.account;
                const password = result.password;
                console.log(account);
                console.log(password);
                dispatch(changeLogin());
                message.success("登录成功")
            })
        }
        else {
            message.error("账号或者密码错误")
        }
    }
}