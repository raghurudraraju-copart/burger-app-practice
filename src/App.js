import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
        <Person name="Raghu" age="29"/>
        <Person name="Varma" age="29">My Hobbies are playing cricket, listening music</Person>
        <Person name="RRV" age="29"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Burger App'));
  }
}

export default App;
