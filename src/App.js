import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Counter from './Counter';
import { 
  incrementByAction, 
  decrementByAction } from './counter/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange(e) {
    this.setState({
      value: +e.target.value
    })
  }
  render() {
    return (
      <div>
        <Counter {...this.props} {...this.state}/>
        <input type="number" value={this.state.value} onChange={this.handleValueChange}/>
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
    incrementBy: (num) => dispatch(incrementByAction(num)),
    decrementBy: (num) => dispatch(decrementByAction(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
