import React from 'react'

const Validation = (props) => {
    let validateText = 'too long text'
    if (props.inputLength <= 5) {
        validateText = 'too short text'
    }
    return (
        <div>
            {/* {
                props.inputLength > 5 ? <p>Text long enough </p> : <p>Text too short </p>
            } */}
            <p>{validateText}</p>
        </div>

    )
}
export default Validation
