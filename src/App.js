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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 29 },
      { name: 'Varma', age: 29 },
      { name: 'RRV', age: 29 }
    ]
  })
  }

  nameChangeHandler = (event) => {
    this.setState({ persons: [
      { name: event.target.value, age: 29},
      { name: 'Varma', age: 29 },
      { name: 'RRV', age: 29 }
    ]

    })
  }

  render() {
    const btnStyle={
      backgroundColor: 'white',
      border: '1px solid green',
      borderRadius: '12px',
      cursor: 'pointer',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
        <button style={btnStyle} onClick={() => this.switchNameHandler("RRV") }>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanged={this.nameChangeHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Raghu Varma R")}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Burger App'));
  }
}

export default App;
