import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'modules/home'
import Pokemons from 'modules/pokemons'

class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" name="Home" component={Home} />
                    <Route path="/pokemons" name="Pokemons" component={Pokemons} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        )
    }
}


export default Layout;