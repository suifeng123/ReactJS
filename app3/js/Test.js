/**
 * Created by Administrator on 2017/5/14.
 */
import React,{ Component } from 'react';

class Test extends Component {
   componentDidMount() {
       this.refs.button.addEventListener('click', e=> {
            this.handleClick(e);
       });
   }
   handleClick(e) {
       console.log(e)
   }
   componentWillUnmount() {
       this.refs.button.removeEventListener('click');
   }

   render() {
       return <button ref="button">Test</button>
   }
}

export  default Test;