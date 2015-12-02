var React = require('react');
var ReactDOM = require('react-dom');
var ReactCountdownClock = require('./countdownClock');

var App = React.createClass({

  getInitialState: function() {
    return this.getState();
  },
  getState: function() {
    return {
      seconds: 12,
      color: '#fff111'
    };
  },
  handleOnComplete: function() {
    this.setState(this.getState());
  },
  render: function() {
    return (
        <div>
        <button id="clock"><ReactCountdownClock seconds={this.state.seconds} color={this.state.color} alpha={0.9} onComplete={this.handleOnComplete}/></button>
        </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('timer-here'));
