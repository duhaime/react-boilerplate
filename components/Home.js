var React = require('react');
import Logo from './Logo';

export default class Home extends React.Component {

  render() {
    
    return(
      <div>
        <Logo />
        <img className="hero" src="https://s3.amazonaws.com/duhaime/oh-my-machine/machine.jpg" />
      </div>
    )
  }
}