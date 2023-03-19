import React, { Component } from 'react'
import Validation from './validation/Validation'
import Char from './char/Char'


class Main extends Component {
    state = {
        userInput: ''
    }
    inputChangedHandler = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    deleteCharIndex = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({ userInput: updatedText })
    }

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char character={ch} key={index}
                clicked={() => this.deleteCharIndex(index)} />
        })
        return (
            <div>
                <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
            </div>
        )
    }
}
export default Main