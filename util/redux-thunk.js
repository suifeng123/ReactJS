function createThunkMiddleware(extraArgument){
	return ({dispatch,getState}) => next => action => {
		if(typeof action === 'function'){
			return action(dispatch,getState,extraArgument);
		}
		return next(action);
	};

}

const thunk = createThunkMiddleware();
export default thunk;

function isPromise(obj){
	return obj && obj.then === 'function';
}

export default function promiseMiddleware({dispatch}){
	return function(next){
		return function(action){
			return isPromise(action) ? action.then(dispatch):next(action);
		}
	}
}

export default function promiseMiddleware({dispatch}){
	return (next) => (action) => {
		const {types,promise,...rest} = action;
		if(!isPromise(promise) || !(action.types && action.types.length === 3)){
			return next(action);
		}

		const [PENDING,DONE,FAIL] = types;

		dispatch({...rest,type:PENDING});
		return action.promise.then(
          (result) => dispatch({...rest,result,type:DONE}),
          (error) => dispatch({...rest,error,type:FAIL})
		);
	};
}