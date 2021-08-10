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
    this.todoItems = [
      { content: 'Shopping', isComplete: true },
      { content: 'Play soccer' },
      { content: 'Swimming' }
    ];

    // state exercise (traffic light)
    this.state = {
      currentColor: RED
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

  render() {
    return (
      <div className="App" >

        {/* Change from array of string to array of component */}
        {
          // todo list exercise
          // Add props key to identify item in list
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />
          )
        }
        {
          this.todoItems.length === 0 && 'Nothing to do'
        }

        {/** State exercise */}
        <TrafficLight currentColor={this.state.currentColor} />
      </div>
    );
  }
}

export default App;
