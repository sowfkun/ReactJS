import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Component
import './App.css';
import TodoItem from './components/todo-item/TodoItem';
import TrafficLight from './components/traffic-light/TrafficLight';
import Accordion from './components/accordion/Accordion';
import Ref from './components/ref/Ref';
import Counter from './components/life-cycle/Counter';
import Bootstrap from './components/bootstrap/Bootstrap';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super(); // inherit from Component

    // state exercise (traffic light)
    this.state = {
      currentColor: RED,
      todoItems: [
        { content: 'Shopping', isComplete: true },
        { content: 'Play soccer', isComplete: false },
        { content: 'Swimming', isComplete: false },
      ],
      showCounter: true,
    };
    // setInterval(() => {
    //   this.setState({
    //     currentColor: this.getNextColor(this.state.currentColor),
    //   });
    // }, 1000);
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
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  removeCounter() {
    this.setState({ showCounter: false });
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className='App'>
        <div className='Exercise'>
          <div className='header'>
            <input
              className='Add-new'
              placeholder='Input new task'
              type='text'
            ></input>
          </div>

          {/* Change from array of string to array of component */}
          <div className='List-items'>
            <div className='Check-all-zone'>
              <input type='checkbox' className='Check-all'></input>
              <p>Check all</p>
            </div>

            {
              // todo list exercise
              // Add props key to identify item in list
              todoItems.length > 0 &&
                todoItems.map((item, index) => (
                  <TodoItem
                    key={index}
                    item={item}
                    onClick={this.onItemClick(item, index)}
                  />
                ))
            }
            {todoItems.length === 0 && 'Nothing to do'}
          </div>
        </div>

        {/** State exercise */}
        <div className='Exercise'>
          <TrafficLight currentColor={this.state.currentColor} />
        </div>

        {/** Props child exercise */}
        <div className='Exercise'>
          <Accordion heading='heading' content='content use props'>
            content use prop children
          </Accordion>
        </div>

        {/** React Ref exercise */}
        <div className='Exercise'>
          <Ref />
        </div>

        {/** life cycle exercise */}
        <div className='Exercise'>
          {this.state.showCounter && <Counter />}
          <button
            className='btn btn-danger'
            onClick={() => this.removeCounter()}
          >
            Remove counter
          </button>
          {/** Remove counter to check component Will unmount */}
        </div>

        {/** bootstrap exercise */}
        <div className='Exercise'>
          <Bootstrap buttonLabel='Modal' className='ModalTest' />
        </div>
      </div>
    );
  }
}

export default App;
