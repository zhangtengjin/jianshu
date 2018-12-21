/*
* @Author: 12574
* @Date:   2018-10-22 10:01:02
* @Last Modified by:   12574
* @Last Modified time: 2018-11-14 14:32:02
*/

import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

import Permission from './pages/permission';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home} ></Route>
                    <Route path='/detail/:id' exact component={Detail} ></Route>
                    <Route path='/login' exact component={Login} ></Route>
                    <Route path='/write' exact component={Write} ></Route>
                    <Route path='/permission' exact component={Permission} ></Route>
                </div>
            </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
