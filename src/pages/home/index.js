/*
* @Author: 12574
* @Date:   2018-10-23 10:12:12
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 11:48:38
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
// import axios from 'axios';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import { HomeWrapper, HomeLeft, HomeRight
} from './style';

import { Carousel, BackTop } from 'antd';

class Home extends Component {

    componentDidMount() {
        this.props.changeHomeData()

    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Carousel
                        autoplay
                        dots={true}
                    >
                        <div><img src="//upload.jianshu.io/admin_banners/web_images/4524/65fb6e8f81ccbbc7dacf5c380e0366a003ba7881.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                        <div><img src="//upload.jianshu.io/admin_banners/web_images/4522/53ecdc42d68411d6b57a016b08136457eb23d5a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                        <div><img src="//upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                        <div><img src="//upload.jianshu.io/admin_banners/web_images/4520/83fadd2df821d52fb277287ac4a189e8d21b7b65.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
                    </Carousel>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <BackTop></BackTop>
            </HomeWrapper>
        )
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
       const action = actionCreators.getHomeInfo();
       dispatch(action);
    }
})
export default connect(null, mapDispatch)(Home);