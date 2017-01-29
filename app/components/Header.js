import {Link} from 'react-router'
import React from 'react'
import About from './About'
import Home from './Home'

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div>Header</div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    )
  }
}