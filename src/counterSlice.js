import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		INCREMENT: (state, action) => {
			state.value = state.value + action.payload
		},
		DECREMENT: (state, action) => {
			state.value = state.value - action.payload
		},
	},
})

export default counterSlice
export const { INCREMENT, DECREMENT } = counterSlice.actions
