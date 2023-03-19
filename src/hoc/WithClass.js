import React from 'react'

const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithClass

// a function that not return a component function but returns a fuction itself