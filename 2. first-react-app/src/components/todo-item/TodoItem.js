import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

import checkImg from './check.png';
import checkedImg from './checked.png';

// classname is the same with filename
class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;

    let src = item.isComplete ? checkedImg : checkImg;
    return (
      // onclick event
      <div className={classNames('TodoItem')}>
        <img onClick={onClick} src={src} width='32px' height='32px' />
        <p
          className={classNames({
            'Item-complete': item.isComplete,
          })}
        >
          {this.props.item.content}
        </p>
      </div>
    );
  }
}

export default TodoItem;
