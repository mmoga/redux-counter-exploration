import * as types from './types';

// initial state
const initialState = 0;
// reducer (how state changes)
const countReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.INCREMENT: 
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state
  }
};

export default countReducer;