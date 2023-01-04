import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from './counterSlice'
import store from './store'

function Counter() {
	const dispatch = useDispatch()
	const count = useSelector(state => {
		return state.counter.value
	})

	return (
		<div>
			<button
				onClick={() => {
					dispatch(INCREMENT(1))
				}}
			>
				Increment
			</button>{' '}
			<button
				onClick={() => {
					dispatch(DECREMENT(1))
				}}
			>
				Decrement
			</button>{' '}
			{count}
		</div>
	)
}

export default function App() {
	return (
		<Provider store={store}>
			<div>
				<Counter />
			</div>
		</Provider>
	)
}
