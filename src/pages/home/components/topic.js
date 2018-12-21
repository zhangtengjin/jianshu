/*
* @Author: 12574
* @Date:   2018-10-23 10:27:03
* @Last Modified by:   12574
* @Last Modified time: 2018-10-24 17:17:06
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('topicList')
})
export default connect(mapState,null)(Topic);