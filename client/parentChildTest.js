var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FloatingActionButton = require('material-ui').FloatingActionButton;

var ClockMixin =  {
  getDefaultProps: function() {
    return {
      time: 25 * 60 * 1000,
      maxtime: 25 * 60 * 1000,
    };
  },
};

var MountMixin = {
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
};
var StateMixin = {
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
  };

var Clock = React.createClass({

  mixins: [ClockMixin],

  getTime: function() {
    var now = new Date(this.props.time).valueOf().toString();
    if(now >= 100000) { 
     return now.slice(0, -4) + '.' + now.slice(2, -3);
    } else if (now <= 99999 && now >= 10000){
        return now.slice(0, -4) + '.' + now.slice(1, -3)
    } else if (now <= 9999){
        return '0.' + now.slice(0, -3)
    }
  },

  getPercent: function() {
    return 100 - ((this.props.maxtime - this.props.time) / this.props.maxtime * 100);
  },

  render: function() {
    
    return (
      
      <p className="clock-text"> {this.getTime()}</p>
      );
  }
});

var OneClock = React.createClass({
 
 mixins: [MountMixin, StateMixin],

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

var OneTeam = React.createClass({
  mixins: [LinkedStateMixin],
  render: function() {
        return (
            <div>
              <div className='clock-button'  style={{backgroundColor: 'red'}}>
                <OneClock/>
            
              </div>
              <div className='clock-button'  style={{backgroundColor: 'red'}}>
              <OneClock/>
              </div>
              <div className='clock-button'  style={{backgroundColor: 'red'}}>              
              <OneClock/>
              </div>
              <button onClick={this.linkState.handleStart}>Pause</button>
            </div>
        );
    }
});

ReactDOM.render(<OneTeam/>, document.getElementById('test'));

