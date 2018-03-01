import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Raghu', age: 29 },
      { name: 'Varma', age: 29 },
      { name: 'RRV', age: 29 }
    ]
  }

  switchNameHandler = () => {
    console.log('Switch Name button Was clicked.');
    this.setState({persons: [
      { name: 'Raghu Varma', age: 29 },
      { name: 'Varma', age: 29 },
      { name: 'RRV', age: 29 }
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Burger App'));
  }
}

export default App;
