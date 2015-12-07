var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var OneTeam = require('./oneTeam');
var TwoTeam = require('./oneTeam');

var OneBout = React.createClass({
  getInitialState: function() {
    return {pause: true};
  },
  getPauseInfo: function() {
    if (this.state.pause) {
      return 'fa fa-pause';
    } else {
      return 'fa fa-play';
    }
  },
  handlePauseAll: function() {
    this.setState({pause: !this.state.pause});
  },
  render: function() {
    var pause = this.state.pause;
    return (
      <div>
          <OneTeam />
      </div>
      );
  }
});

ReactDOM.render(<OneBout/>, document.getElementById('timers'));
