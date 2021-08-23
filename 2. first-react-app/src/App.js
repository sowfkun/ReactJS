import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Component
import './App.css';
import TodoItem from './components/todo-item/TodoItem';
import TrafficLight from './components/traffic-light/TrafficLight';
import Accordion from './components/accordion/Accordion';
import Ref from './components/ref/Ref';
import Counter from './components/life-cycle/Counter';
import Bootstrap from './components/bootstrap/Bootstrap';
import Card from './components/functional-statless-component/Card';

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

class App extends Component {
  constructor() {
    super(); // inherit from Component

    // state exercise (traffic light)
    this.state = {
      todoItems: [
        { content: 'Shopping', isComplete: true },
        { content: 'Play soccer', isComplete: false },
        { content: 'Swimming', isComplete: false },
      ],
      showCounter: true,
    };
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
      <Router>
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
            <h2>State exercise</h2>
            <TrafficLight />
          </div>

          {/** Props child exercise */}
          <div className='Exercise'>
            <h2>Props child exercise</h2>
            <Accordion heading='heading' content='content use props'>
              content use prop children
            </Accordion>
          </div>

          {/** React Ref exercise */}
          <div className='Exercise'>
            <h2>React Ref exercise</h2>
            <Ref />
          </div>

          {/** life cycle exercise */}
          <div className='Exercise'>
            <h2>Life cycle exercise </h2>
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
            <h2>BootStrap exercise</h2>
            <Bootstrap buttonLabel='Modal' className='ModalTest' />
          </div>

          {/** bootstrap exercise */}
          <div className='Exercise'>
            <h2>Functional Stateless Component exercise</h2>
            <Card imgUrl='https://picsum.photos/200/300'>
              <p>don't have state</p>
              <p>props are argument of function</p>
              <p>don't have life cycle</p>
            </Card>
          </div>

          {/** Router exercise */}
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
