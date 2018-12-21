/*
* @Author: 12574
* @Date:   2018-10-22 10:34:58
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 10:10:04
*/
import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    cursor: pointer;
    &.active {

    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        top: 14px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        width: 240px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        transition: all .2s ease-in;
        transfrom: rotate(0deg);
        transfrom-origin: center center;
    }
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    font-size: 14px;
    border: 1px solid #ec6149;
    line-height: 38px;
    border-radius: 19px;
    margin-right: 20px;
    padding: 0 20px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
