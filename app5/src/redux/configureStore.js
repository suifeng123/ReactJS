/**
 * Created by Administrator on 2017/5/25.
 */
import { createStore,combineReducers,compose,applyMiddle } from 'redux';
import { routerReducer } from 'react-router-redux';

import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const finalCreateStore = compose(
    applyMiddle(ThunkMiddleware)
)(createStore);
