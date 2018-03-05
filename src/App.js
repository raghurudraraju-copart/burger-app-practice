import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"RaghuId", name: 'Raghu', age: 29 },
      { id:"VarmaId", name: 'Varma', age: 29 },
      { id:"RRV", name: 'RRV', age: 29 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({persons: [
  //     { name: newName, age: 29 },
  //     { name: 'Varma', age: 29 },
  //     { name: 'RRV', age: 29 }
  //   ]
  // })
  // }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons;
      //const persons = this.state.persons.slice();//It will give the copy of the array not the refernced value.
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});

    // this.setState({ persons: [
    //   { id:"RaghuId" name: event.target.value, age: 29},
    //   { name: 'Varma', age: 29 },
    //   { name: 'RRV', age: 29 }
    // ]
    //})

  }

  togglePersonHandler = () => {
    const doesShowPeople = this.state.showPersons;
    this.setState({showPersons: !doesShowPeople})
  };

  render() {
    const btnStyle={
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid green',
      borderRadius: '12px',
      cursor: 'pointer',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if( this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} key={person.id} name={person.name} age={person.age} nameChanged={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = ['bold'];

    if(this.state.persons.length > 2) {
      classes.push('green');
    }

    if(this.state.persons.length <= 2) {
      classes.push('yellow');
    }

    if(this.state.persons.length <= 1) {
      classes.push('red');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Welcome to Burger App</h1>
          <p className={classes.join(' ')}>Hello User,</p>
          <button style={btnStyle} onClick={ this.togglePersonHandler }>Switch Name</button>
          <div>{persons}</div>
        </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Burger App'));
  }
}

export default Radium(App);
