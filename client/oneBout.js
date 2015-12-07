var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var OneTeam = require('./oneTeam');

var OneBout = React.createClass({
  render: function() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="row">
          <div className="col-md-6">
            <OneTeam/>
          </div>
          <div className="col-md-6">
            <OneTeam/>
          </div>
          <button onClick={this.handleReset}><i className="fa fa-refresh"></i> Reset All </button>
          <button onClick={this.handleStart}><i className={this.getIconName()}></i></button>
        </div>
      </div>
      );
  }
});

ReactDOM.render(<OneBout/>, document.getElementById('timers'));
