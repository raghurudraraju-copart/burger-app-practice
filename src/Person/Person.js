import React from 'react';

const person = (props) => {
  return <div>
    <p onClick={props.click}>Im {props.name}! i am {props.age}</p>
    <p>{props.children}</p>
  </div>
}

export default person;
