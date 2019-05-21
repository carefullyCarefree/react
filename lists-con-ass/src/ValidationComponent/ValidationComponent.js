import React from 'react'

const ValidationComponent = (props) => {
    let message = 'Text long enough'

    if (props.inputLength < 5) {
        message = 'Text too short'
    } 

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}


export default ValidationComponent;
