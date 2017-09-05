import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
const { Content,Footer } = Layout; //进行解构

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
      //调用函数进行设置状态
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
