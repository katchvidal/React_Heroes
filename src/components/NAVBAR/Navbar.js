import React, { useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types'


export const Navbar = () => {

    const { usuario, dispatch } = useContext(authContext)
    const history = useHistory()

    const handleLogOut = () => {
        history.replace('/login');
        dispatch({
            type : types.logout
        })

        history.replace('/login')

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">HeroesApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel"> Marvel </NavLink>
                <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc"> DC </NavLink>
                <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search"> Search </NavLink>
                <span className="nav-item nav-link text-info"> { usuario.name }  </span>
                <button className="nav-item nav-link btn" onClick={ handleLogOut }> Logout </button>
            </ul>
            </div>
        </div>
        </nav>



    )
}
