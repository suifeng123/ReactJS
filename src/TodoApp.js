import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';
import CountDown from './CountDown.js';
import Weather from './Weather';

function TodoApp() {
  return (
    <div>
      <Todos />
      <Filter />

      <CountDown startCount={10}>
        {
        	(count) => <h1>{count > 0 ? count: '新年快乐'}</h1>
        }
      </CountDown>
      <Weather />
    </div>
  );
}

export default TodoApp;
