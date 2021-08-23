import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor),
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case GREEN:
        return YELLOW;
      case YELLOW:
        return RED;
      case RED:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className='TrafficLight'>
        {/** Dynamic classname use classnames module */}
        <div
          className={classNames('light', 'red', {
            active: currentColor === RED,
          })}
        />
        <div
          className={classNames('light', 'yellow', {
            active: currentColor === YELLOW,
          })}
        />
        <div
          className={classNames('light', 'green', {
            active: currentColor === GREEN,
          })}
        />
      </div>
    );
  }
}

export default TrafficLight;
