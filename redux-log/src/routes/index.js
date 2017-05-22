/**
 * Created by Administrator on 2017/5/22.
 */
import React from 'react';
import { Router,Route,IndexRoute,hashHistory } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
    <Router history={hashHistory}>
       <Route path="/" component={Home} />
       <Route path="/detail/:id" component={Detail} />
    </Router>
)