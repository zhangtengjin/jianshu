/*
* @Author: 12574
* @Date:   2018-10-23 10:27:46
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 11:24:15
*/
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ListItem, ListInfo, LoadMore} from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={"/detail/" + item.get("id")} key={index}>
                                <ListItem key={index}>
                                    <img className="pic" src={item.get("imgUrl")} />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>

        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList'),
    page: state.home.get('articlePage')
})
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List);