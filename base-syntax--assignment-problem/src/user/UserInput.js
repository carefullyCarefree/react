import UserInput from '/UserOutput';
import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" onChange={props.changeName} value=""/>
    )
}

export default userInput;
