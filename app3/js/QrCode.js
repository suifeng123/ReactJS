/**
 * Created by Administrator on 2017/5/14.
 */
import React,{ Component } from 'react';

class QrCode extends  Component {
    //构造函数
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);

        this.state {
            active: false
        };
    }

    componentDidMount() {
        document.body.addEventListener('click',e => {
            if(e.target && e.target.match('div.code')){
                return;
            }

            this.setState({
                active: false
            });
        });
    }
    //在组件卸载的时候要把原生的dom事件卸载diao
    componentWillUnmount() {
        document.body.removeEventListener('click');
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            active: !this.state.active,
        });
    }

    handleClickQr(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="qr-wrapper">
              <button className="qr" onClick={this.handleClick}>二维码</button>
                <div className="code" style={{ display: this.state.active?'block':'none'}}
                     onClick={this.handleClickQr}
                     >

            </div>
        )
    }
}