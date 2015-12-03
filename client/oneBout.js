var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var OneTeam = require('./oneTeam');

var OneBout = React.createClass({
  
  getMaxTime: function(isBreak) {
        if (isBreak) {
            return 30 * 10000;
        } else {
            return 30 * 10000;
        };
    },

    getInitialState: function () {
        return {
            isPlaying: false,
            isBreak: false,
            time: this.getMaxTime(),
            maxtime: this.getMaxTime(),
        };
    },

    timeOver: function() {
        this.setState({
            time: this.state.maxtime,
            isPlaying: false
        });
    },

    startTimer: function() {
        var _this = this;
        return window.setInterval(function () {
            if (_this.state.time > 0) {
                _this.setState({
                    time: _this.state.time-1000
                });
            } else {
                _this.timeOver();
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

    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.isPlaying) {
            if (!this.timer)
                this.timer = this.startTimer();
        } else {
            window.clearInterval(this.timer);
            this.timer = null;
        }
    },

    componentDidMount: function() {
        
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

    getPageName: function() {
        if (this.state.isBreak) {
            return 'full-page full-red';
        } else {
            return 'full-page full-blue';
        }
    },

    getBreakName: function() {
        if (this.state.isBreak) {
            return 'fa fa-briefcase';
        } else {
            return 'fa fa-coffee';
        }
    },

    handleBreak: function() {
        this.setState({
            isBreak: !this.state.isBreak, 
            maxtime: this.getMaxTime(!this.state.isBreak),
            time: this.getMaxTime(!this.state.isBreak),
        });
    },

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
              <button onClick={this.handleReset}><i className='fa fa-refresh'></i> Reset All </button>
              <button onClick={this.handleStart}><i className={this.getIconName()}></i></button>

              </div>
            </div>
        );
    }
});

ReactDOM.render(<OneBout/>, document.getElementById('timers'));