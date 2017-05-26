import React,{ Component }from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux';
import PreviewList from '../components/Home/PreviewList';
import { listActions } from './HomeRedux';


class Home extends Component {
  render() {

    return (
      <div>
        <h1>首页的展示页面</h1>
        <PreviewList
            {...this.props.list}
            {...list.props.listActions}
        />
      </div>
    );
  }
}

export default connect(state => {
  return {
    list: state.home.list
  };
}, dispatch => {
  return {
    listActions: bindActionCreators(listActions,dispatch),
  };
})(Home);
