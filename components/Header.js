import {Link} from 'react-router';
var React = require('react');
var About = require('./About');
var Home = require('./Home');

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <Link to={"/"}>Band</Link>
        <Link to={"/about"}>About</Link>
      </div>
    )
  }
}