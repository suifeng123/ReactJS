import React,{PropTypes} from 'react';
import {connect} from 'react-redux';

const Foo = ({text}) => (
    <div>{text}</div>
)

const mapStateToProps = (state) => {
	text: state.text
};

export default connect(mapStateToProps)(Foo);