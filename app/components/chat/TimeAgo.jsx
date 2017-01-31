var React = require('react')
var moment = require('moment')

// Mixin para eliminar un setInterval cuando el elemento se borra
var SetIntervalMixin = {

  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  },

};

// ¿Hace cuanto se envió el mensaje?
var TimeAgo = React.createClass({

  mixins: [SetIntervalMixin],

  render: function () {
    return (
      <small className="time-ago">{this.state.time}</small>
    );
  },

  componentDidMount: function () {
    this.setInterval(this.updateTime, this.props.delay);
  },

  getInitialState: function () {
    return { time: moment(this.props.children).fromNow() };
  },

  updateTime: function () {
    this.setState({ time: moment(this.props.children).fromNow() });
  },

});

module.exports = TimeAgo;