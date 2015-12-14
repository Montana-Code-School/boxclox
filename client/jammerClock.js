var React = require('react');
var ReactDOM = require('react-dom');
var RaisedButton = require('material-ui').RaisedButton;
var FloatingActionButton = require('material-ui').FloatingActionButton;
var Colors = require('material-ui/lib/styles/colors');

var Clock = require('./clockText');

var JammerClock = React.createClass({
  propTypes: {
    pause: React.PropTypes.bool,
    jammerOne: React.PropTypes.number,
    jammerTwo: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      isPlaying: false,
      time: this.getMaxTime(),
      maxtime: this.getMaxTime(),
    };
  },
  getMaxTime: function() {
    if (this.props.jammerOne) {
      return this.props.jammerOne;
    } else if (this.props.jammerTwo) {
      return this.props.jammerTwo;
    } else {
      return 30 * 10000;
    }
  },
  componentDidMount: function() {
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.state.time !== 300000) {
      if (this.props.pause === this.state.isPlaying) {
        this.handleStart();
      }
    }
    if(this.props.jammerOne != nextProps.jammerOne){
     this.getMaxTime();
   }
  },
  componentWillUpdate: function(nextProps) {
    console.log(this.props.jammerOne);
    console.log(this.props.jammerTwo);
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.isPlaying) {
      if (!this.timer) {
        this.timer = this.startTimer();
      }
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  },
  componentWillUnmount: function() {
    window.clearInterval(this.timer);
    this.timer = null;
  },
  getIconName: function() {
    if (this.state.isPlaying) {
      return 'fa fa-5x fa-pause';
    } else {
      return 'fa fa-5x fa-play';
    }
  },
  startTimer: function() {
    var that = this;
    return window.setInterval(function() {
      if (that.state.time > 0) {
        that.setState({
          time: that.state.time - 1000
        });
      } else {
        that.timeOver();
      }
    }, 100);
  },
  handleStart: function() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
    if (this.props.jammerOne) {
      this.props.switch(300000 - this.state.time, this.state.isPlaying, 'jOne');
    } if (this.props.jammerTwo) {
      this.props.switch(300000 - this.state.time, this.state.isPlaying, 'jTwo');
    }
  },

  handleReset: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },
  switchJammerState: function() {
    var that = this; 
    that.componentWillUpdate();
  },

  timeOver: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },
  render: function() {
    return (
      <div>
        <button className="clock-float" onClick={this.handleStart}><Clock time={this.state.time} maxtime={this.state.maxtime} /></button>
        <button className="clock-float" onClick={this.handleStart}><i className={this.getIconName()}></i></button>
        <button className="reset" onClick={this.switchJammerState}>Switch Jammers </button>
        <button className="reset" onClick={this.handleReset}>Reset </button>
      </div>
      );
  }
});

module.exports = JammerClock;
