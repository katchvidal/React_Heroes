import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DCScreen } from '../components/DC/DCScreen'
import { MarvelScreen } from '../components/MARVEL/MarvelScreen'
import { Navbar } from '../components/NAVBAR/Navbar'
import { SearchScreen } from '../components/SEARCH/SearchScreen'
import { HeroesScreen } from '../components/UI/HeroesScreen'

export const DashBoardRoutes = () => {
    return (
        <>
           <Navbar />

            <div className="container mt-2">
                <Switch>
                        <Route exact path='/marvel' component={MarvelScreen}></Route>
                        <Route exact path='/dc' component={ DCScreen }></Route>
                        <Route exact path='/search' component={ SearchScreen }></Route>
                        <Route exact path='/hero/:heroeId' component={ HeroesScreen } ></Route>
                        <Redirect to='/marvel'></Redirect>
                </Switch>
            </div>
        </>
    )
}
