import React from 'react'
import Navicon from './navicon/Navicon'
import config from '../../../../config'
import './header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <div className='stripe' />
        <div className='logo-container'>
          <div className='logo' />
          <div className='app-name'>{config.brand}</div>
        </div>
        <Navicon />
      </header>
    )
  }
}