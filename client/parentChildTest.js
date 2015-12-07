var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var MountMixin = {
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

  componentDidMount: function() {

  },

  componentWillUnmount: function() {
    window.clearInterval(this.timer);
    this.timer = null;
  },
};
var StateMixin = {
  getMaxTime: function(isBreak) {
    return 30 * 10000;
  },

  getInitialState: function() {
    return {
      isPlaying: false,
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
  },

  handleReset: function() {
    this.setState({
      time: this.state.maxtime,
      isPlaying: false
    });
  },

  handleAll: function() {
    this.setState({
      isPlaying: !this.state.isPlaying,
      isRunning: !this.state.isRunning

    });
  },

  getIconName: function() {
    if (this.state.isPlaying) {
      return 'fa fa-pause';
    } else {
      return 'fa fa-play';
    }
  },
};

var Clock = React.createClass({
  propTypes: {
    time: React.PropTypes.string,
  },
  getTime: function() {
    var now = new Date(this.props.time).valueOf().toString();
    if (now >= 100000) {
      return now.slice(0, -4) + '.' + now.slice(2, -3);
    } else if (now <= 99999 && now >= 10000) {
      return now.slice(0, -4) + '.' + now.slice(1, -3);
    } else if (now <= 9999) {
      return '0.' + now.slice(0, -3);
    }
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
    <button className="clock-float" onClick={this.handleStart}><Clock time={this.state.time} maxtime={this.state.maxtime} /></button>
    <button className="clock-float" onClick={this.handleStart}><i className={this.getIconName()} style={{fontSize: '6em'}}></i></button>
    <button className="reset" onClick={this.handleReset}>Reset </button>
    </div>
  );
  }
});

var OneTeam = React.createClass({
  mixins: [MountMixin, StateMixin],

  render: function() {
    return (
      <div>
        <div className="col-md-4 col-md-offset-2">
        <h3> Home Team </h3>
      <div className="clock-button" style={{backgroundColor: 'rgba(168,0,0, .8)'}}>
      <OneClock isRunning={this.state.isPlaying}/>
      </div>
        <div className="clock-button" style={{backgroundColor: 'rgba(168,0,0, .8)'}}>
        <OneClock isRunning={this.state.isPlaying}/>
        </div>
        <div className="clock-button" style={{backgroundColor: 'rgba(168,0,0, .8)'}}>
        <OneClock/>
        </div>
        </div>
        <div className="col-md-4">
        <h3> Visitors </h3>
        <div className="clock-button" style={{backgroundColor: 'rgba(0, 0, 179, .8)'}}>
        <OneClock isRunning={this.state.isPlaying}/>

        </div>
        <div className="clock-button" style={{backgroundColor: 'rgba(0, 0, 179, .8)'}}>
        <OneClock isRunning={this.state.isPlaying}/>
        </div>
        <div className="clock-button" style={{backgroundColor: 'rgba(0, 0, 179, .8)'}}>
        <OneClock isRunning={this.state.isPlaying}/>
        </div>
        </div>
        <div className="col-md-8 col-md-offset-2 center">
        <button className="reset-all" onClick={this.handleAll}>Pause</button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<OneTeam/>, document.getElementById('test'));

      // <span className="item">
      // <FloatingActionButton iconClassName="fa fa-refresh" iconStyle={{color: '#00bcd4'}} onClick={this.handleReset} />
      // </span>
      // <span className="item">
      // <FloatingActionButton iconClassName={this.getBreakName()} iconStyle={{color: '#00bcd4'}} onClick={this.handleBreak} />
      // </span>
