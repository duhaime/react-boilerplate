import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import './main.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);