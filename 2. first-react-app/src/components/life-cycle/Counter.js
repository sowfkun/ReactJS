import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    console.log('counter constructor');
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  decrease() {
    this.setState({ count: this.state.count - 1 });
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

  // this component is called when init and attacj to DOM
  // Call only 1 time
  // should call api here
  componentDidMount() {
    console.log('counter did mount');
  }

  // this component is called when everytime Dom re-render
  // isn't called when init
  componentDidUpdate() {
    console.log('counter did update');
  }

  // is called before unmount
  componentWillUnmount() {
    console.log('counter is removed');
  }

  // return false mean parent update child will not update
  shouldComponentUpdate(nextProps, nextState) {
    // condition check when update and when not update
    console.log(this.state.count, nextState);
    if (this.state.count === nextState.count) {
      return false;
    }
    return true;
  }
}

// Life Cycle
// 1. Constructor first
// 2. inside render
// 3. componentDidMount
// 4. When re-render
//// - inside render
//// - componentDidUpdate
// 5. Component is removed
//// - componentWillUnmount
// When app re-render, children inside re-render as well

export default Counter;
