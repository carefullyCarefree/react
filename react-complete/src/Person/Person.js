import React from 'react';
import Radium from 'radium'
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, and I am {props.age} years old!</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(Person);
