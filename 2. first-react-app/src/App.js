import { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super(); // inheritit from Component
    this.todoItems = [
      { content: 'Shopping', isComplete: true },
      { content: 'Play soccer' },
      { content: 'Swimming' }
    ];
  }

  render() {
    return (
      <div className="App" >
        {/* Change from array of string to array of component */}
        {
          // Add props key to identify item in list
          this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
