import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Raghu', age: 29 },
      { name: 'Varma', age: 29 },
      { name: 'RRV', age: 29 }
    ],
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShowPeople = this.state.showPersons;
    this.setState({showPersons: !doesShowPeople})
  }

  render() {
    const btnStyle={
      backgroundColor: 'white',
      border: '1px solid green',
      borderRadius: '12px',
      cursor: 'pointer',
      padding: '8px'
    };

    let persons = null;

    if( this.state.showPersons) {
      persons = (
        <div>
          {
          this.state.persons.map( (person, key) => {
            return <Person key={key} name={person.name} age={person.age} nameChanged={this.nameChangeHandler}/>
          }

          )
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Welcome to Burger App</h1>
        <button style={btnStyle} onClick={ this.togglePersonHandler }>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Burger App'));
  }
}

export default App;
