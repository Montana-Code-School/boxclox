var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Colors = require('material-ui/lib/styles/colors');

var OneClock = require('./oneClock');

var OneTeam = React.createClass({
  render: function() {
        return (
            <div>
              <OneClock/>
              <OneClock/>
              <OneClock/>
            </div>
        );
    }
});


ReactDOM.render(<OneTeam/>, document.getElementById('timer-one'));
ReactDOM.render(<OneTeam/>, document.getElementById('timer-two'));
