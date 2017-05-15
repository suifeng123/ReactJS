/**
 * Created by Administrator on 2017/5/14.
 */
import React, { Component} from 'react'; //es6的写法

class Radio extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
          radioValue: ''
        };
    }

    handleChange(e) {
        this.setState({
            radioValue:e.target.value,
        })
    }

    render() {
        //设置一些固定的常量
        const { radioValue } = this.state;

        return (
            <div>
                <p>性别:</p>
                <label>男性:
                  <input type="text" value="男性" checked={radioValue === '男性'}
                         onChange={this.handleChange} />
                </label>
                <label>女性:
                  <input type="text" value="女性" checked={radioValue === '女性'}
                         onChange={this.handleChange} />
                </label>
            </div>
        )
    }

}

export  default Radio;