import React, { useEffect, useRef, useContext } from 'react'
import '../../containers/App.css';
import AuthContext from '../../context/auth-context'
const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log('[cockpit.js] use effect')
        //http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud')
        // }, 1000);
        toggleBtnRef.current.click();
        return (() => {
            console.log('[cockpit.js] remove cockpit or cleanup')

            // this will never run or return bcoz useeffect never unmounts or removes a function for that we have to run this function conditionally in app js(component will unmount)
        })
        // }, [props.persons])//to run only when persons change
    }, [])//to run only one time when page loads

    let classes = [];
    if (props.personsLength <= 2) {
        classes.push('red')// class=['red]
    }

    if (props.personsLength <= 1) {
        classes.push('bold')// class=['red','bold']
    }
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className="button" onClick={props.clicked}>Switch Name</button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
}
export default React.memo(Cockpit)