// initial state
const initialState = 0;
// reducer (how state changes)
const countReducer = (state=initialState, action) => {
  switch(action.type) {
    case "INCREMENT": 
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state
  }
};

export default countReducer;