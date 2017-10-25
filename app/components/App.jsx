import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class AppWrapper extends React.Component {
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