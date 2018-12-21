/*
* @Author: 12574
* @Date:   2018-10-18 12:01:00
* @Last Modified by:   12574
* @Last Modified time: 2018-10-22 11:03:56
*/

import React from 'react';
import ReactDom from 'react-dom';
import './style.js';
import './statics/iconfont/iconfont.js'
import App from './App';
// 热更新
{/*if (module.hot) {
    module.hot.accept();
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}*/}

ReactDom.render(<App />, document.getElementById('root'));