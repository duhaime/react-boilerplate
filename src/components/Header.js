import {Link} from 'react-router';
var React = require('react');
var About = require('./About');
var Home = require('./Home');

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <span>Header Links: </span>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    )
  }
}