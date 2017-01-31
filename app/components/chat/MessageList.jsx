var React = require('react')
var Message = require('./Message')

// List of extant messages
var MessageList = React.createClass({

  render() {
    var messageList = this.props.messageList.map(function (m, i) {
      return (
        <Message key={i} name={m.username} time={m.time}>{m.body}</Message>
      );
    });

    return (
      <ul className="message-list">
        {messageList}
      </ul>
    );
  },

});

module.exports = MessageList;