import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem = () => {
    this.setState({ count: (this.state.count > 0) ? (this.state.count - 1) : 0 });
  }

  render() {
    return (
      <div>
        <h2>{ this.state.count }</h2>
        <button onClick={this.IncrementItem}>+</button>
        <button onClick={this.DecreaseItem}>-</button>
      </div>
    );
  }
}

export default Counter;
