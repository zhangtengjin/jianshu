/*
* @Author: 12574
* @Date:   2018-10-23 10:13:18
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 11:31:19
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import './style/detail.css';

class Detail extends Component {

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.getDetail(this.props.match.params.id);
    }

    render() {
        const {title, content} = this.props
        return (
            <div className="detailWrapper">
                <div className="header">{title}</div>
                <div className="content" dangerouslySetInnerHTML={{__html: content}}>
                </div>
            </div>
        )
    }
}
const mapState = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState,mapDispatch)(Detail);