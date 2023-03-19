import React, { Component } from 'react';
import classes from './person.css'
import PropTypes from 'prop-types'
// import Aux from '../../../../hoc/Aux';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext
    //this method of static is only available in classes in functional components useContext hook is used

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }


    render() {

        console.log('[Persons.js] rendering...')


        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    changed: PropTypes.func,
}
export default WithClass(Person, classes.person)