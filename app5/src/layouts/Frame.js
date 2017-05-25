/**
 * Created by Administrator on 2017/5/25.
 */
import React,{ Component } from 'react';
import Nav from './Nav';

class Frame extends Component {
    render() {
        return (
            <div className="frame">
              <section className="header">
                <Nav/>
              </section>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default Frame;