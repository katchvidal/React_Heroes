import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'


export const PrivateRouter = ({
    isAuthenticated,
    component : Component,
    ...resto
}) => {

    console.log( resto.location.pathname );
    localStorage.setItem('lastpath', resto.location.pathname )
    
    return (

        <Route 
            { ...resto }
            component = { (props) => (
                    (isAuthenticated)
                        ? (<Component {...props} />)
                        : (<Redirect to="/login" />)
            )}
        />

    )
}


PrivateRouter.propTypes = {

    isAuthenticated : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired

}