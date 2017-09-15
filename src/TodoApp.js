import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';
import CountDown from './CountDown.js';
import {view as CitySelector} from './city_selector/';
import {view as Weather }from './weather/';

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
      <div>
        <CitySelector />
        <Weather />
      </div>
    </div>
  );
}

export default TodoApp;
