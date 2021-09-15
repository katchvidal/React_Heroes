import React, { useContext } from 'react'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const laspath = localStorage.getItem('lastpath') || '/'
    const { dispatch } = useContext( authContext)

    const handleLogin = () =>{
        
        dispatch({
            type : types.login,
            payload : {
                name : 'katch'
            }
        })
        
        history.replace(laspath)
    }


    return (

        <div className="container mt-5">
            <h1> Login Screen </h1>
            <hr/>

            <button className="btn btn-primary " onClick={ handleLogin }> Ingresar </button>

        </div>
    )
}
