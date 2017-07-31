import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


//Imports components to make routers
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos'/>
    </Router>

)
