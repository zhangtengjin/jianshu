/*
* @Author: 12574
* @Date:   2018-10-22 10:31:25
* @Last Modified by:   12574
* @Last Modified time: 2018-11-08 17:04:59
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';


class Header extends Component {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn,
            handleMouseEnter, handleMouseLeave, handleClickPage, handleInputFocus } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length) {
            for(let i = ((page-1)*10); i < page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleClickPage(page,totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render() {
        const {focused, list, handleInputFocus, handleInputBlur, login, logout, changeBackground, bgcStyle} = this.props;
        return (
            <div>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav>
                        <Link to='/'><NavItem className="left active">首页</NavItem></Link>
                        <NavItem className="left">下载App</NavItem>
                        {
                            login ?
                            <NavItem onClick={logout} className="right">退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                        }
                        <NavItem className="right" onClick={changeBackground}>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>

                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={ () => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe610;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to="/write">
                            <Button className="writting">
                                <i className="iconfont">&#xe734;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        mouseIn: state.header.get('mouseIn'),
        totalPage: state.header.get('totalPage'),
        login: state.login.get('login'),
        bgcStyle: state.header.get('bgcStyle')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list);
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleClickPage(page, totalPage, spin) {
            // console.log(spin.style.transform);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle,10)
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        },
        changeBackground() {
            dispatch(actionCreators.changeBackground())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);