import React from 'react';

const Counter = props => {
    return (
      <div>
        <h1>{props.count}</h1>
          <button onClick={() => props.incrementBy(props.value)}>+</button>
          <button onClick={() => props.decrementBy(props.value)}>-</button>
      </div>
    );
  }

  export default Counter;