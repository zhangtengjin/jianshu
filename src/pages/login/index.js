/*
* @Author: 12574
* @Date:   2018-10-25 11:09:42
* @Last Modified by:   12574
* @Last Modified time: 2018-11-08 17:15:11
*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import {  LoginWrapper, LoginBox, Input, Button } from './style';
import { LoginWrapper, LoginBox } from './style';
import { Form, Icon, Input, Button } from 'antd';
import { actionCreators } from './store';
import './styles/login.css';

const FormItem = Form.Item;

class Login extends Component {

    handleSubmit = (e) => {
        const { getFieldValue } = this.props.form;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log(values);
            this.props.login(getFieldValue('username'),getFieldValue('password'));
        }
        });
    }
    render() {
        // const {loginStatus} = this.props;
    //     if (!loginStatus) {
    //         return (
    //             <LoginWrapper>
    //                 <LoginBox>
    //                     <Input placeholder="账号" innerRef={(input) => {this.account = input}} />
    //                     <Input placeholder="密码" type="password" innerRef={(input) => {this.password = input}} />
    //                     <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
    //                 </LoginBox>
    //             </LoginWrapper>
    //         )
    //     } else {
    //         return <Redirect to='/' />
    //     }
            const { getFieldDecorator, getFieldValue } = this.props.form;
            const {loginStatus} = this.props;
            if (!loginStatus) {
                return (
                    <LoginWrapper>
                        <LoginBox>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username',{
                                        rules: [{
                                            required: true,
                                            message: '请输入用户名'
                                        }]
                                    })(
                                        <Input prefix={<Icon type="user" />} placeholder="用户名" style={{width: "200px"}}/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password',{
                                        rules: [{
                                            required: true,
                                            message: '请输入密码'
                                        }]
                                    })(
                                        <Input prefix={<Icon type="lock" />} placeholder="密码" type="password" style={{width: "200px"}}/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        登录
                                    </Button>
                                </FormItem>
                            </Form>
                        </LoginBox>
                    </LoginWrapper>
                )
            } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.login.get('login')
})
const mapDispatch = (dispatch) => ({
    login(account,password) {
        dispatch(actionCreators.login(account,password))
        console.log(account,password);
    }
})
export default connect(mapState, mapDispatch)(Form.create()(Login));