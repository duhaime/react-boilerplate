import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppWrapper from './components/AppWrapper';
import ChatBox from './components/chat/ChatBox.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={AppWrapper}>
      <Route path='/' component={ChatBox} />
    </Route>
  </Router>,
  document.getElementById('app')
);