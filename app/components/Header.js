import {Link} from 'react-router';
var React = require('react');
var About = require('./About');
var Home = require('./Home');

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