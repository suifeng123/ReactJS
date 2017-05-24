/**
 * Created by Administrator on 2017/5/24.
 */
import React from 'react';
import { Router,Route,IndexRoute} from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';

//接下来，使用react-router 提供的组件来定义应用的路由

const routes =  (
   <Router history={ hashHistory }>
       <Route path="/" component={Home} />
       <Route path="/detail/:id" component={Detail} />

   </Router>
);
export default routes;