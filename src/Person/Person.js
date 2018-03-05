import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  return <div className="Person">
    <p onClick={props.click}>Im {props.name}! i am {props.age}</p>
    <p >{props.children}</p>
    <input type="text" onChange={props.nameChanged} value={props.name} />
  </div>
}

export default Radium(person);
