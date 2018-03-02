import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux';

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
// creation of the store
const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


class App extends Component {
  render() {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-</button>
      </div>
    );
  }
}

export default App;
