import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
  render() {
    const { currentColor } = this.props;
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
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            earum, soluta assumenda, ab laborum iure mollitia unde veniamv svds
            sdfsdf sdfsdf sfsdfs sdfdfs dignissimos dicta itaque, vero molestias
            nemo et eaque sapiente est repudiandae doloremque.
          </p>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
