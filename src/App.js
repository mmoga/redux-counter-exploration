import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Counter from './Counter';
import { incrementAction, decrementAction } from './counter/actions';

class App extends Component {
  render() {
    return (
      <div>
        <Counter {...this.props}/>
        <Counter {...this.props}/>
        <Counter {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
