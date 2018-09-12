import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from 'support/Auth'

const GuardedRoute = ({ component: Component, ...rest }) => {
    // const {auth}=this.props
    console.log('Is authenticated: ',Auth.isAuthenticated().data)
    const wrapped = (props) => {

        return Auth.isAuthenticated()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    }

    return <Route {...rest} render={wrapped} />
}


export default GuardedRoute;