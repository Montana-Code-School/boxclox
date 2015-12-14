var React = require('react');
var ReactDOM = require('react-dom');
var RaisedButton = require('material-ui').RaisedButton;
var FloatingActionButton = require('material-ui').FloatingActionButton;
var Colors = require('material-ui/lib/styles/colors');

var Clock = require('./clockText');

var JammerClock = React.createClass({
  propTypes: {
    pause: React.PropTypes.bool,
    jammer: React.PropTypes.array
  },

  getInitialState: function() {
    return {
      isPlaying: false,
      jammer: [30 * 10000, 30 * 10000],
      time: 30 * 10000,
      maxtime: 30 * 10000,
    };
  },
  componentDidMount: function() {
  },
  componentWillReceiveProps: function() {
    if (this.state.time !== 300000) {
      if (this.props.pause === this.state.isPlaying) {
        this.handleStart();
      }
    }
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
    var that = this;
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  },
  handleReset: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },
  switchJammerState: function() {
    this.setState({
      jammer: this.state.jammer.reverse()
    });
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
        <button className="reset" onClick={this.handleReset}>Reset </button>
      </div>
      );
  }
});

module.exports = JammerClock;
