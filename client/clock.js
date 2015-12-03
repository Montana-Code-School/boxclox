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
      maxseconds: 12,
      color: '#fff111'
    };
  },
  handleOnComplete: function() {
    this.setState(this.getState());
  },
  render: function() {
    return (
        <div>
        <ReactCountdownClock seconds={this.state.seconds} color={this.state.color} alpha={0.9} onComplete={this.handleOnComplete}/>
        <ReactCountdownClock seconds={this.state.seconds} color={this.state.color} alpha={0.9} onComplete={this.handleOnComplete}/>

        </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('timer-one'));
ReactDOM.render(<App/>, document.getElementById('timer-two'));
