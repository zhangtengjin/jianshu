/*
* @Author: 12574
* @Date:   2018-10-25 14:18:13
* @Last Modified by:   12574
* @Last Modified time: 2018-11-12 11:29:51
*/
/*
* @Author: 12574
* @Date:   2018-10-25 11:09:42
* @Last Modified by:   12574
* @Last Modified time: 2018-10-25 14:08:43
*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import MyEditor from './components/myEditor.js';
import './style/write.css';

class Write extends Component {
    initEditor = () => {
        var editor = new Editor({
            element: document.getElementById("textarea"),
            tools: true,
            status: true
        });
        editor.render();
    }
    componentDidMount() {
        this.initEditor();
    }
    render() {
        const {loginStatus} = this.props;
        // if (loginStatus) {
            return (
                <div>
                    <textarea id="textarea"></textarea>
                </div>
            )
        // }
        // else {
        //     return <Redirect to='login' />
        // }

    }
}

const mapState = (state) => ({
    loginStatus: state.login.get('login')
})
export default connect(mapState, null)(Write);