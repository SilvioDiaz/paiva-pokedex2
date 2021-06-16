import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import Details from '../pages/Details'
import Error from "../pages/Error"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/pokedex" >
                    <Pokedex />
                </Route>
                <Route exact path="/details/:name" >
                    <Details />
                </Route>
                <Route>
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes