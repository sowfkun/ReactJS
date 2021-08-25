import React, { Component } from 'react';

class CounterFuncSetState extends Component {
  constructor() {
    console.log('counter constructor');
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  // this way call setState 2 times exactly
  // old way, when call setstate 2 times just add 1
  increase() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  decrease() {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }

  render() {
    console.log('counter render');
    return (
      <div className='Counter'>
        <button onClick={this.decrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default CounterFuncSetState;
