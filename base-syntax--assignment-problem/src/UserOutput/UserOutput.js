import React from 'react';

const userOutput = (props) => {
    return (
        <div className="outputStyle">
            <p >I want to understand React. My username is: {props.username} I will be tough and stick it out even though I'm struggling.</p>
            <p>React will not own me. I will own React.</p>
        </div>
    )
}

export default userOutput;
