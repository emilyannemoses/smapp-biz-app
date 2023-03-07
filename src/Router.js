import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import Navigation from './components/Navigation'
import LogIn from './components/LogIn'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route exact path="/login" component={LogIn} />
        </Switch>
    );
};

export default Router;