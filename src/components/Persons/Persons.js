import React, { PureComponent } from 'react'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import Person from './person/person'
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js]  shouldComponentUpdate')
    //     if (
    //         nextProps.persons !== this.props.persons || nextProps.changed !== this / this.props.changed || nextProps) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     // this will nnot render the person everytime when component upate it only show persons when reqd
    // }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('[Persons.js]  getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js]  componentDidUpdate');
        console.log(snapshot)
    }


    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                /></ErrorBoundary>

        })
    }
}
export default Persons
