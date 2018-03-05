import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  return <div className="Person" style={style}>
    <p onClick={props.click}>Im {props.name}! i am {props.age}</p>
    <p >{props.children}</p>
    <input type="text" onChange={props.nameChanged} value={props.name} />
  </div>
}

export default Radium(person);
