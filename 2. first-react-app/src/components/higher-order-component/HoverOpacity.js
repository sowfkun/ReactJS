import React, { Component } from 'react';

class HoverOpacity extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  onMouseEnter() {
    this.setState({ isHovered: true });
  }

  onMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    return (
      <div
        style={{ opacity: this.state.isHovered ? 0.3 : 1 }}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default HoverOpacity;
