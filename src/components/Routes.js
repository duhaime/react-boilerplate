import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/about' component={About}/>
  </Route>
)
