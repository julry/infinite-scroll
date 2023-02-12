import React from 'react';

const DEFAULT_STATE = {};

export const ProgressContext = React.createContext(DEFAULT_STATE);

export const ProgressProvider = ProgressContext.Provider;
export const ProgressConsumer = ProgressContext.Consumer;
//
// const connect = (mapStateToProps) => Component => {
// 	class Connect extends React.Component {
// 		constructor(props) {
// 			super(props);
//
// 			this.state = props.store.getState();
// 		}
//
// 		componentDidMount() {
// 			this.props.store.subscribe(state => {
// 				this.setState(state);
// 			});
// 		}
//
// 		render() {
// 			const { store } = this.props;
//
// 			return (
// 				<Component
// 					{...this.props}
// 					{...mapStateToProps(store.getState())}
// 				/>
// 			);
// 		}
// 	}
//
// 	return props => (
// 		<ProgressConsumer>
// 			{store => <Connect {...props} store={store} />}
// 		</ProgressConsumer>
// 	);
// };
//
// const createStore = rootReducer => {
// 	let state;
// 	let listeners = [];
//
// 	const getState = () => state;
//
// 	const dispatch = action => {
// 		state = rootReducer(state, action);
// 		listeners.forEach(listener => listener(state));
// 	};
//
// 	const subscribe = listener => {
// 		listeners.push(listener);
// 	};
//
// 	dispatch({});
//
// 	return { getState, dispatch, subscribe };
// };
//
//
// export {createStore, connect}