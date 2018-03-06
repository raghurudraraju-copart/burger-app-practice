import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {

  return <div className={cssClasses.Person} >
    <p onClick={props.click}>Im {props.name}! i am {props.age}</p>
    <p >{props.children}</p>
    <input type="text" onChange={props.nameChanged} value={props.name} />
  </div>
}

export default person;
