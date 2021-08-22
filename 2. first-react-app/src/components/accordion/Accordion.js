import React, { Component } from 'react';
import './Accordion.css';
class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      isCollapsed: true,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    const { heading, content, children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className='Accordion'>
        <div className='Heading' onClick={this.onClick}>
          <h2>{heading}</h2>
        </div>
        {!isCollapsed && <div className='Content'>{content}</div>}
        {!isCollapsed && <div className='Content'>{children}</div>}
      </div>
    );
  }
}

export default Accordion;
