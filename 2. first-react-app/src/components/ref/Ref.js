import React, { Component } from 'react';

class Ref extends Component {
  constructor() {
    super();
    this.startInput = React.createRef();
    this.form = React.createRef();
  }

  componentDidMount() {
    this.startInput.current.focus();
  }

  onClick() {
    this.form.current.reset();
  }

  render() {
    return (
      <form ref={this.form}>
        <input type='text' placeholder='focus on load' ref={this.startInput} />
        <input type='text' placeholder='second input' />
        <button onClick={() => this.onClick()} type='button'>
          clear
        </button>
      </form>
    );
  }
}

export default Ref;
