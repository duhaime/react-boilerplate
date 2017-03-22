import React from 'react'
import Header from './partials/header/Header'
import Footer from './partials/footer/Footer'

export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app-container'>
        <div className='app-wrapper'>
          <Header />
          <div className='app-content'>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}