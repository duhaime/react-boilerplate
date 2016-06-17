var React = require('react');

var App = React.createClass({

  // initialize state objects here
  getInitialState: function() {
    return {
      
      // define the objects to expose in state
      data: {
        objectKey: [
          {
            id: 1,
            data: "object item one"
          },
          {
            id: 2,
            data: "object item two"
          },
          {
            id: 3,
            data: "object item three"
          }
        ],

        listKey: ["list item one", "list item two", "list item three"]
      }
    };

  },

  render() {
    return (
      <div class="container">
        <div>It Works!</div>
        <br/>
        <div>List object:</div>
          <ul>
            {
              this.state.data.listKey.map(function(k) {
                return <li key={k}>{k}</li>
              })
            }
          </ul>
        <div>Object:</div>
          <ul>
            {
              this.state.data.objectKey.map(function(k) {
                return <li key={k.id}>{k.data}</li>
              })
            }
          </ul>
      </div>
    );
  }

});

module.exports = App;