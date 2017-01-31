var React = require('react')
var TimeAgo = require('./TimeAgo')
var ReactDOM = require('react-dom') 

// Cada mensaje individual
var Message = React.createClass({

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  },

  render() {
    return (
      <li className="message">
        <strong>{this.props.name}:</strong> {this.props.children} 
        <TimeAgo delay="500">{this.props.time}</TimeAgo>
      </li>
    );
  },

});

module.exports = Message;