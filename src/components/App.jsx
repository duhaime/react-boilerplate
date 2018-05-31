import React from 'react';
import { Link } from 'react-router-dom';
import Items from './Items';

export default props => (
  <div className='app-container'>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/about/subroute'}>Subcomponent</Link>
    {props.children}
    <Items />
  </div>
)
