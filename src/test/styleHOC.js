import React from 'react';

const styleHOC = (WrappedComponent,style) => {
	return class HOCComponent extends React.Component {

		render() {
			return (
               <div style={style}>
                  <WrappedComponent {...this.props} />
               </div>
		   )
		}
	}
}

//可以这样定义组件了
const style = { color:'red' };
const NewComponent = styleHOC(DemoComponent,style);

//继承凡是显示

function removeUserProp(WrappedComponent){
	return class NewComponent extends WrappedComponent {
		render() {
			const {user,...otherProps} = this.props;
			this.props = otherProps;
			return super.render();
		}
	}
}

//以函数为子组件的实现
const loggedinUser = 'mock user';

class AddUserProp extends React.Component {
	render() {
		const user = loggedinUser;
		return this.props.children(user);
	}
}

AddUserProp.propTypes = {
	children: React.PropTypes.func.isRequired
}