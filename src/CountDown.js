import React from 'react';

class CountDown extends React.Component {
	constructor(){
		super(...arguments);

		this.state = { count: this.props.startCount };
	}
   //函数是否进行更新的函数
    shouldComponentUpdate(nextProps,nextState){
    	return nextState.count !== this.state.count;
    }
   //组件装载时的调用的函数
   componentDidMount(){
   	this.intervakHandle = setInterval(() => {
   		const newCount = this.state.count - 1;
   		if(newCount >= 0){
   			this.setState({count: newCount})
   		}else{
   			window.clearInterval(this.intervakHandle);
   		}
   	},1000);
   }

   //组件卸载时的调用的函数
   componentWillUnmount() {
   	if(this.intervakHandle){
   		window.clearInterval(this.intervakHandle);
   	}
   }

   //最后的渲染函数
   render() {
   	return this.props.children(this.state.count);
   }

}
//对字段类型进行限制
CountDown.propTypes = {
	children: React.PropTypes.func.isRequired,
	startCount: React.PropTypes.number.isRequired
}

//导出组件
export default CountDown;