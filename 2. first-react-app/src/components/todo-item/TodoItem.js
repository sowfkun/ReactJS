import React, { Component } from 'react';
import './TodoItem.css'
// classname is the same with filename
class TodoItem extends Component {
    render() {
        const { item } = this.props;

        // Dynamic classname use if else
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' Item-complete';
        }

        return (
            <div className={className}>
                <p>{this.props.item.content}</p>
            </div>
        );
    }
}

export default TodoItem;