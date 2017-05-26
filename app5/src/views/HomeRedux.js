/**
 * Created by Administrator on 2017/5/25.
 */
import { combineReducers } from 'redux';

//引入 reducers 及 actionCreator
import  list,{ loadArticles } from '../components/Home/PreviewListRedux';

export default combineReducers({
    list,
});

export * as listAction from '../components/Home/PreviewListRedux';