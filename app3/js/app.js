import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Fei from './Fei';
class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  handleChange(e) {
    this.setState({
      activeIndex: parseInt(e.target.value, 10),
    });
  }

  render() {
    // 这里切换 select 中的选项是没有作用的，因为使用的是 defaultActiveIndex，
    // 如果想要作用的话，要把 defaultActiveIndex 改成 activeIndex 就可以
    return (
      <div>
        <div className="operator">
          <span>切换 Tab：</span>
          <select value={this.state.activeIndex} onChange={this.handleChange}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>

        <Fei />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
