import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  increment: null,
  decrement: null,
  reset: null,
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  value: 0,
})

/* ------------- Selectors ------------- */

//export const CounterSelectors = {
//  getData: state => state.data
//}

/* ------------- Reducers ------------- */

// request increment counter
export const increment = (state) => {
  return state.merge({ value: state.value+1 })
}

// request decrement counter
export const decrement = (state) => {
  return state.merge({ value: state.value-1 })
}

// request increment counter
export const reset = (state) => {
  return state.merge({ value: 0 })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [Types.RESET]: reset
})
