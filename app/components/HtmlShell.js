import React from 'react'

export default class HtmlShell extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel='stylesheet' href='/styles.css'/>
          <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
        </head>
        <body>
          <div id='outlet' className='container'>
            {this.props.children}
          </div>
          <script src='./bundle.js'></script>
        </body>
      </html>
    )
  }
}
