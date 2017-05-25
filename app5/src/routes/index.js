import React from 'react';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';

import Home from '../components/Home/Home';
import Detail from '../components/Detail/Detail';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
    </Router>
);

export default routes;
