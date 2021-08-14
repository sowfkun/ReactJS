import { Component } from 'react';
import './App.css';
import TodoItem from './components/todo-item/TodoItem';
import TrafficLight from './components/traffic-light/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super(); // inherit from Component

    // data for todo list exercise
    this.state = {

    };

    // state exercise (traffic light)
    this.state = {
      currentColor: RED,
      todoItems: [
        { content: 'Shopping', isComplete: true },
        { content: 'Play soccer' },
        { content: 'Swimming' }
      ]
    }
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      })
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

  onItemClick(item, index) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App" >

        {/* Change from array of string to array of component */}
        <div className='List-items'>
          {
            // todo list exercise
            // Add props key to identify item in list
            todoItems.length > 0 && todoItems.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClick(item, index)} />
            )
          }
          {
            todoItems.length === 0 && 'Nothing to do'
          }
        </div>


        {/** State exercise */}
        <TrafficLight currentColor={this.state.currentColor} />
      </div>
    );
  }
}

export default App;
