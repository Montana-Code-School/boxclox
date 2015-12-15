var React = require('react');
var ReactDOM = require('react-dom');
var TextField = require('material-ui/lib/text-field');

var ColorPicker = require('./colorPicker');
var OneClock = require('./oneClock');

var Bout = React.createClass({
  getInitialState: function() {
    return {
      color: '#FF0000',
      color2: '#00FF00',
      pause: false,
      clockOne: 300000,
      clockTwo: 300000,
      clockThree: 300000,
      clockFour: 300000,
      clockFive: 300000,
      clockSix: 300000,
      clockOneStarted: false
    };
  },
  getPauseInfo: function() {
    if (this.state.pause) {
      return 'JAM START';
    } else {
      return 'JAM STOP';
    }
  },
  clockTickCallback: function(whichClock) {
    if (!this.state.pause) {
      var newState = {};
      newState[whichClock] = this.state[whichClock] - 1000;
      this.setState(newState);
    }
    if (this.state[whichClock] <= 0) {
      this.handleResetClick(whichClock);
    }
  },
  handleResetClick: function(whichClock) {
    var newState = {};
    newState[whichClock] = 300000;
    newState[whichClock + 'Started'] = false;
    this.setState(newState);
  },
  handleClockClick: function(whichClock) {
    var newState = {};
    newState[whichClock + 'Started'] = !this.state[whichClock + 'Started'];
    this.setState(newState);
    if (this.state.pause === true) {
      alert('The jam is off, this timer will start onced you click the JAM START button.');
    }
  },
  handlePauseAll: function() {
    this.setState({pause: !this.state.pause});
  },
  changeColor: function(color) {
    this.setState({color: color});
  },
  changeColorText: function(evt) {
    this.changeColor(evt.target.value);
  },
  changeColor2: function(color2) {
    this.setState({color2: color2});
  },
  changeColorText2: function(evt) {
    this.changeColor2(evt.target.value);
  },
  switchJammers: function() {
    var newOne;
    var newFour;
    newOne = 300000 - this.state.clockFour;
    newFour = 300000 - this.state.clockOne;
    if (this.state.clockOne !== 300000 || this.state.clockFour !== 300000) {
      this.setState({
        clockOne: newOne,
        clockFour: newFour
      });
    }
  },
  render: function() {
    var pause = this.state.pause;
    return (
        <div>
          <div className="row">
          <div className="col-xs-6 col-sm-4 col-sm-offset-2 ">
            <h3> Home Team </h3>
            <div className="form-area">
              <TextField hintText="Enter Color" floatingLabelText="Home Color:" style={{width: '95%'}} onChange={this.changeColorText} />
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockOne')} handleClick={this.handleClockClick.bind(this, 'clockOne')}
                started={this.state.clockOneStarted} maxTicks={30000} ticks={this.state.clockOne} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockOne')} />
            </div>
            </div>
            <div className="col-xs-6 col-sm-4">
             <h3> Visitors </h3>
              <div className="form-area">
                <TextField hintText="Enter Color" floatingLabelText="Visitor Color:" style={{width: '95%'}} onChange={this.changeColorText2} />
              </div>
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockFour')} handleClick={this.handleClockClick.bind(this, 'clockFour')}
                started={this.state.clockFourStarted} maxTicks={30000} ticks={this.state.clockFour} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockFour')} />
              </div>
              </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-sm-offset-2 center">
              <button className="reset-all"onClick={this.switchJammers}> switch jammers </button>
              </div>
              <div className="row">
            <div className="col-xs-6 col-sm-4 col-sm-offset-2 ">
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockTwo')} handleClick={this.handleClockClick.bind(this, 'clockTwo')}
                started={this.state.clockTwoStarted} maxTicks={30000} ticks={this.state.clockTwo} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockTwo')} />
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockThree')} handleClick={this.handleClockClick.bind(this, 'clockThree')}
                started={this.state.clockThreeStarted} maxTicks={30000} ticks={this.state.clockThree} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockThree')} />
            </div>
            </div>
            <div className="col-xs-6 col-sm-4">
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockFive')} handleClick={this.handleClockClick.bind(this, 'clockFive')}
                started={this.state.clockFiveStarted} maxTicks={30000} ticks={this.state.clockFive} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockFive')} />
              </div>
            <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock handleReset={this.handleResetClick.bind(this, 'clockSix')} handleClick={this.handleClockClick.bind(this, 'clockSix')}
                started={this.state.clockSixStarted} maxTicks={30000} ticks={this.state.clockSix} callbackInterval={100}
                tickCallback={this.clockTickCallback.bind(this, 'clockSix')} />
            </div>
            </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 center">
              <button className="reset-all" onClick={this.handlePauseAll}>{this.getPauseInfo()}</button>
              <ColorPicker value={this.state.color} onChange={this.changeColor} />
              <ColorPicker value={this.state.color2} onChange={this.changeColor2} />
            </div>
          </div>
        );
  },

});

ReactDOM.render(<Bout/>, document.getElementById('timers'));
