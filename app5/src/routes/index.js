import React from 'react';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
        <IndexRoute components={Home}/>
        <Route path="/detail/:id" component={Detail} />
        </Route>
    </Router>
);

export default routes;
