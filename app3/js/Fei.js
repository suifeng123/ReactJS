/**
 * Created by Administrator on 2017/5/14.
 */
import React, { Component } from 'react';

class Fei extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { value } = this.refs.name;
        console.log(value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input ref="name" type="text" defaultValue="Hangzhou" />
                <button type="submit">提交</button>
            </form>
        )
    }
}

export  default Fei;