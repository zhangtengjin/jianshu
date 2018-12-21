/*
* @Author: 12574
* @Date:   2018-10-23 10:27:59
* @Last Modified by:   12574
* @Last Modified time: 2018-10-26 16:03:38
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';
class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem key={item.get('id')}>
                        <img className="recommendImg" src={item.get('imgUrl')} alt=""/>
                        </RecommendItem>
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('recommendList')
})

export default connect(mapStateToProps,null)(Recommend);