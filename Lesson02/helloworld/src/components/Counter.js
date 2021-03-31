import React, { Component } from 'react'

export default class Counter extends Component {
  state = { number: 0 };
  incrementState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrementState = () => {
    if (!this.state.number==0) {
        this.setState({ number: --this.state.number});
    } 
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.decrementState}>-</button>
        <button onClick={this.incrementState}>+</button>
      </div>
    );
  }
}
