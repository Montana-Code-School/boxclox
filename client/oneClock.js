var React = require('react');
var ReactDOM = require('react-dom');
var RaisedButton = require('material-ui').RaisedButton;
var FloatingActionButton = require('material-ui').FloatingActionButton;
var Colors = require('material-ui/lib/styles/colors');

var Clock = require('./clockText');

var OneClock = React.createClass({
  propTypes: {
    pause: React.PropTypes.bool,
    started: React.PropTypes.bool,
    ticks: React.PropTypes.number,
    handleClick: React.PropTypes.func,
    handleReset: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      isPlaying: false,
      time: 30 * 10000,
      maxtime: 30 * 10000,
    };
  },
  componentDidMount: function() {
    this.initTimerInterval(this.props);
  },
  componentWillReceiveProps: function(newProps) {
    if (this.state.time !== 300000) {
      if (this.props.pause === this.state.isPlaying) {
        this.handleStart();
      }
    }
    this.initTimerInterval(newProps);
  },
  componentWillUnmount: function() {
    window.clearInterval(this.timer);
    this.timer = null;
  },
  getIconName: function() {
    if (this.props.started) {
      return 'fa fa-5x fa-pause';
    } else {
      return 'fa fa-5x fa-play';
    }
  },
  initTimerInterval: function(props) {
    var that = this;
    if (props.started && !this.timer) {
      this.timer = setInterval(props.tickCallback, props.callbackInterval || 1000);
    } else if (!props.started && this.timer || !props.started && props.ticks === 0) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  },
  render: function() {
    return (
      <div>
        <button className="clock-float" onClick={this.props.handleClick} ><Clock time={this.props.ticks} /></button>
        <button className="clock-float" onClick={this.props.handleClick}><i className={this.getIconName()}></i></button>
        <button className="reset" onClick={this.props.handleReset}> Reset </button>
      </div>
      );
  }
});

module.exports = OneClock;
