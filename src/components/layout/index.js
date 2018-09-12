import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'modules/home'
import Dashboard from 'modules/dashboard'

class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" name="Home" component={Home} />
                    <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        )
    }
}


export default Layout;