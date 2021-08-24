import React, { Component } from 'react';

export default class RenderPropsCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <p>use property: {this.props.render(this.state)}</p>
        <p>use children: {this.props.children(this.state)}</p>
      </div>
    );
  }
}
