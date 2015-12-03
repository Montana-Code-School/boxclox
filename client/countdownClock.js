	var React = require('react');
	var ReactDOM = require('react-dom');

	var ReactCountdownClock = React.createClass({
	  seconds: 0,
	  radius: null,
	  fraction: null,
	  content: null,
	  canvas: null,
	  propTypes: {
	    seconds: React.PropTypes.number,
	    maxseconds: React.PropTypes.number,
	    size: React.PropTypes.number,
	    color: React.PropTypes.string,
	    alpha: React.PropTypes.number,
	    onComplete: React.PropTypes.func,
	    isPlaying: React.PropTypes.func
	  },
	  getDefaultProps: function() {
	    return {
	      size: 300,
	      color: '#000',
	      alpha: 1
	    };
	  },
	  componentWillReceiveProps: function(props) {
	    this.seconds = props.seconds;
	    return this.setupTimer();
	  },
	  componentDidMount: function() {
	    this.seconds = this.props.seconds;
	    return this.setupTimer();
	  },

	  setupTimer: function() {
	    this.setScale();
	    this.setupCanvas();
	    this.drawTimer();
	    return this.startTimer();
	  },
	  updateCanvas: function() {
	    this.clearTimer();
	    return this.drawTimer();
	  },
	  setScale: function() {
	    this.radius = this.props.size / 2;
	    this.fraction = 2 / this.seconds;
	    return this.tickPeriod = this.seconds * 1.8;
	  },
	  setupCanvas: function() {
	    this.canvas = ReactDOM.findDOMNode(this);
	    this.context = this.canvas.getContext('2d');
	    this.context.textAlign = 'center';
	    this.context.textBaseline = 'middle';
	    return this.context.font = "bold " + (this.radius / 2) + "px Arial";
	  },
	  startTimer: function() {
	    var that = this;
	    return setTimeout(function(that) {
	      return function() {
	        return that.tick();
	      };
	    }(that), 200);
	  },
	  handleStart: function() {
	  	this.setState({
	  		isPlaying: !this.state.isPlaying
	  	});
	  },
	  handleReset: function() {
	  	this.setState({
	  		seconds: this.state.maxtime,
	  		isPlaying: false
	  	});
	  },
	  tick: function() {
	  	var that = this;
	    var start;
	    start = Date.now();
	    return setTimeout(function(that) {
	      return function() {
	        var duration;
	        duration = (Date.now() - start) / 1000;
	        that.seconds -= duration;
	        if (that.seconds <= 0) {
	          that.seconds = 0;
	          that.handleComplete();
	          return that.clearTimer();
	        } else {
	          that.updateCanvas();
	          return that.tick();
	        }
	      };
	    }(that), this.tickPeriod);
	  },
	  handleComplete: function() {
	    if (this.props.onComplete) {
	      return this.props.drawTimer();
	    }
	  },
	  clearTimer: function() {
	    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    return this.drawBackground();
	  },
	  drawBackground: function() {
	    this.context.beginPath();
	    this.context.globalAlpha = this.props.alpha / 3;
	    this.context.arc(this.radius, this.radius, this.radius, 0, Math.PI * 2, false);
	    this.context.arc(this.radius, this.radius, this.radius / 1.8, Math.PI * 2, 0, true);
	    return this.context.fill();
	  },
	  drawTimer: function() {
	    var decimals, percent, ref, warn;
	    percent = this.fraction * this.seconds + 1.5;
	    decimals = (ref = this.seconds <= 9.9) != null ? ref : {
	      1: 0
	    };
	    warn = (ref = this.seconds <= 10 && this.seconds >= 0) ? this.context.fillStyle = "red" : this.context.fillStyle = this.props.color;
	    this.context.globalAlpha = this.props.alpha;
	    this.context.fillText(this.seconds.toFixed(decimals), this.radius, this.radius);
	    this.context.beginPath();
	    this.context.arc(this.radius, this.radius, this.radius, Math.PI * 1.5, Math.PI * percent, false);
	    this.context.arc(this.radius, this.radius, this.radius / 1.8, Math.PI * percent, Math.PI * 1.5, true);
	    return this.context.fill();
	  },
	  render: function() {
	    return React.createElement("canvas", {
	      "className": "react-countdown-clock",
	      "width": this.props.size,
	      "height": this.props.size
	    });
	  }
	});

	module.exports = ReactCountdownClock;
