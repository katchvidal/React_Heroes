import React, { useEffect, useReducer } from 'react'
import { authContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routes/AppRouter'

const init = () =>{
  return JSON.parse(localStorage.getItem('usuario')) || { logged : false }
}

const initialState = {}

export const HeroesApp = () => {
  

  const [usuario, dispatch] = useReducer(authReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }, [usuario])

  return (

    < authContext.Provider value={{ usuario, dispatch }}>
      <AppRouter />
    </authContext.Provider>
  )
}
