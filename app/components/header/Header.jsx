import React from 'react';
import Navicon from './navicon/Navicon';
import config from '../../../config';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <Navicon />
      </header>
    )
  }
}