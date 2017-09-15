import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';
import Routes from './Routes.js';

import store from './Store.js';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
