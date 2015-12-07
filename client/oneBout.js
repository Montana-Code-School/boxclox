var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var OneTeam = require('./oneTeam');
var TwoTeam = require('./oneTeam');

var OneBout = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-md-4 col-md-offset-2">
          <h3> Home Team </h3>
          <OneTeam/>
        </div>
        <div className="col-md-4">
          <h3> Visitors </h3>
          <TwoTeam/>
        </div>
        <div className="col-md-8 col-md-offset-2 center">
          <button className="reset-all" onClick={this.handleAll}>Pause</button>
        </div>
      </div>
      );
  }
});

ReactDOM.render(<OneBout/>, document.getElementById('timers'));
