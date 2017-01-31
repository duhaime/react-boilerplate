var React = require('react')

// Message sending form
var ChatForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      message: ""
    }
  },

  updateUsername(e) {
    this.setState({username: e.target.value})
  },

  updateMessage(e) {
    this.setState({message: e.target.value})
  },

  render: function () {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input className="input username-input"
            type="text"
            placeholder="Username"
            ref="username"
            value={this.state.username}
            onChange={this.updateUsername} />
        <input className="input body-input"
            type="text"
            placeholder="Write something!"
            ref="body"
            value={this.state.message}
            onChange={this.updateMessage} />
        <button className="button">Submit</button>
      </form>
    );
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var message = {
      username: this.state.username,
      body: this.state.message
    }

    if (!message.username || !message.body) {
      return;
    }

    this.props.onMessageSubmit(message);
    this.setState({message: ''})
  },

});

module.exports = ChatForm;