import React from 'react';
import {Router,Route,browserHistory} from 'react-router';

import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import About from './pages/About.js';

const history = browserHistory;

const Routes = () => (
	<Router history={browserHistory}>
       <Route path="home" component={Home} />
       <Route path="About" component={About} />
       <Route path="*" component={NotFound} />

	</Router>
);

export default Routes;