var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var RaisedButton = require('material-ui').RaisedButton;
var FloatingActionButton = require('material-ui').FloatingActionButton;
var Colors = require('material-ui/lib/styles/colors');

var Clock = require('./clockText');

var OneClock = React.createClass({

  getInitialState: function() {
    return {
      isPlaying: false,
      isBreak: false,
      time: this.getMaxTime(),
      maxtime: this.getMaxTime(),
    };
  },

  componentDidMount: function() {

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

  getMaxTime: function() {
    return 30 * 10000;
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
      isPlaying: !this.state.isPlaying
    });
  },

  handleReset: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
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
      <button className="button-float" onClick={this.handleStart}><Clock time={this.state.time} maxtime={this.state.maxtime} /></button>
      <button className="button-float" onClick={this.handleStart}><i className={this.getIconName()} style={{fontSize: '8em'}}></i></button>
      <span className="item">
      <FloatingActionButton iconClassName="fa fa-refresh" iconStyle={{color: '#00bcd4'}} onClick={this.handleReset} />
      </span>
      <span className="item">
      <FloatingActionButton iconClassName={this.getBreakName()} iconStyle={{color: '#00bcd4'}} onClick={this.handleBreak} />
      </span>
      </div>
      );
  }
});

module.exports = OneClock;
