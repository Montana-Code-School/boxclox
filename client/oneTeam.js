var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Colors = require('material-ui/lib/styles/colors');

var OneClock = require('./oneClock');

var ChooseColor = require('./colorPicker');

var OneTeam = React.createClass({
  render: function() {
    return (
        <div>
          <div>
            <ChooseColor/>
          </div>
          <div className="clock-button" style={{backgroundColor: 'red'}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: 'red'}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: 'red'}}>
            <OneClock/>
          </div>
        </div>
    );
  }
});

module.exports = OneTeam;
