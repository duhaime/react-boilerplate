var React = require('react')
var MessageList = require('./MessageList')
var ChatForm = require('./ChatForm')
require('./chat.css')
require('./app.js')

// Chat container
var ChatBox = React.createClass({

  render() {
    return (
      <div className="chat-box">
        <h1 className="title">ReactJS Chat</h1>
        <MessageList messageList={this.state.messageList} />
        <ChatForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  },

  getInitialState() {
    return {
      messageList: [],
    }
  },

  handleMessageSubmit(message) {
    socket.emit('message', message);
    this.addNewMessage(message);
  },

  componentDidMount() {
    socket.once('messages', function (messages) {
      this.setState({ messageList: messages });
    }.bind(this));

    socket.on('message', function (message) {
      this.addNewMessage(message);
    }.bind(this));
  },

  addNewMessage(message) {
    var messageList = this.state.messageList;
    if (messageList.length > 100) {
      messageList.shift();
    }
    messageList.push(message);
    this.setState({ messageList: messageList });
  },

});

module.exports = ChatBox;