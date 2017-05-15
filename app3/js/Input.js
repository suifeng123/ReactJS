/**
 * Created by Administrator on 2017/5/14.
 */
import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        this.state = {
            inputValue: '',
            textareaValue:''
        };
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
        console.log("单行输入框已经发生了改变了");
    }

    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value,
        })
        console.log("多行输入框已经发生改变了");
    }
    render() {
        //定义一些变量
        const { inputValue,textareaValue } = this.state;
        return (
            <div>
                <p>单行输入框:<input type="text" value={inputValue}
                  onChange={this.handleInputChange} /> </p>
                <p>多行输入框:<textarea value={textareaValue}
                  onChange={this.handleTextareaChange} /></p>
            </div>
        )
    }
}

export  default Input;