import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import HtmlShell from './components/HtmlShell'
import Routes from './components/Routes'
require('./project-styles.css');

/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet')
  ReactDOM.render(<Router history={browserHistory} routes={Routes} />, outlet)
}

/* Exported static site renderer */
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({
    routes: Routes,
    location: location
  }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToStaticMarkup(
      <HtmlShell>
        <RouterContext {...renderProps} />
      </HtmlShell>
    );
    callback(null, html)
  })
}
