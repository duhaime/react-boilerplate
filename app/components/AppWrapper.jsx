var React = require('react')

// render application shell
var AppWrapper = React.createClass({

  render: function() {
    return (
      <div className='app-container'>
        <div className='app-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = AppWrapper;