import React from 'react';
import UserInput from '/UserInput';

const userOutput = (props) => {
    return (
        <div>
            <p>I want to understand React. My username is {props.username} I will be tough and stick it out even though I'm struggling.</p>
            <p>React will not own me. I will own React.</p>
        </div>
    )
}

export default userOutput;
