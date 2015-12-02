var React = require('react');
var ReactDOM = require('react-dom');
var ReactCountdownClock = require('./countdownClock')

   var App = React.createClass({

      getState: function(){
        return { 
          seconds: 12,
          color: "#fff111"
        }
      },
      getInitialState: function(){
        return this.getState();
      },
      handleOnComplete: function(){
        this.setState(this.getState());
      },
      render: function(){
        return <ReactCountdownClock seconds={this.state.seconds} color={this.state.color} alpha={0.9} onComplete={this.handleOnComplete} />
      }
    });

ReactDOM.render(<App/>, document.getElementById("timer-here"));