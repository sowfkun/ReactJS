import React, { Component } from 'react';
import './TodoItem.css'
// classname is the same with filename
class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">
                <p>{this.props.item.content}</p>
            </div>
        );
    }
}

export default TodoItem;