import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRouter = ({
    isAuthenticated,
    component : Component,
    ...resto
}) => {
    return (

            <Route  { ...resto }
            component = { (props) => (
                    (!isAuthenticated)
                        ? (<Component {...props} />)
                        : (<Redirect to="/" />)
            )}
            />

    )
}
