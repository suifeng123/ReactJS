/**
 * Created by Administrator on 2017/5/16.
 */
import { Map } from 'immutable';
import React, { Component } from 'react';
import '_' from  'loadsh';

let a = Map({
    select: 'users',
    filter: Map({name:'Cam'})
});

let b = a.set('select','people');

a===b;// => false

a.get('filter') === b.get('filter');