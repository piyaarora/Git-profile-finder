import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/UserOutput';

class Task1 extends Component {
    state = {
        username: [
            { name: 'riya' },
            { name: 'roohi' },
            { name: 'rupali' },

        ]
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: [
                { name: event.target.value },
                { name: 'chandu' },
                { name: 'kash' },

            ]
        })
    }
    render() {
        return (
            <div className="App">
                <UserInput changed={this.nameChangeHandler}
                    currentName={this.state.username[0].name} />
                <UserOutput username={this.state.username[0].name} />
                <UserOutput username={this.state.username[1].name} />
                <UserOutput username={this.state.username[2].name} />

            </div>
        );

    }
}

export default Task1;