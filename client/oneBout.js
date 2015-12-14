var React = require('react');
var ReactDOM = require('react-dom');
var TextField = require('material-ui/lib/text-field');

var ColorPicker = require('./colorPicker');
var OneClock = require('./oneClock');
var JammerClock = require('./jammerClock');

var Bout = React.createClass({
  getInitialState: function() {
    return {
      color: '#FF0000',
      color2: '#00FF00',
      pause: true,
      jammerOne: 300000,
      jammerTwo: 300000,
    };
  },
  getPauseInfo: function() {
    if (this.state.pause) {
      return 'JAM STOP';
    } else {
      return 'JAM START';
    }
  },
  toggleJammerClocks: function() {
    this.setState({
      jammer: this.state.jammer.reverse()
    });
  },
  handleJammerSwitch: function(time, isRunning, clockId) {
    console.log('switch! ' + time + ' '  + isRunning + ' ' + clockId);
    if (isRunning === true) {
      this.setState({
        jammerOne: time,
        jammerTwo: time
      });
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
  render: function() {
    var pause = this.state.pause;
    var jammerOne = this.state.jammerOne;
    var jammerTwo = this.state.jammerTwo;
    return (
        <div>
          <div className="col-xs-6 col-sm-4 col-sm-offset-2 ">
            <h3> Home Team </h3>
            <div className="form-area">
              <TextField hintText="Enter Color" floatingLabelText="Home Color:" style={{width: '95%'}} onChange={this.changeColorText} />
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
              <JammerClock pause={pause} jammerOne={jammerOne} switch={this.handleJammerSwitch} />
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
              <OneClock pause={pause}/>
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
              <OneClock pause={pause}/>
            </div>
            </div>
            <div className="col-xs-6 col-sm-4">
             <h3> Visitors </h3>
              <div className="form-area">
                <TextField hintText="Enter Color" floatingLabelText="Visitor Color:" style={{width: '95%'}} onChange={this.changeColorText2} />
              </div>
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
               <JammerClock pause={pause} jammerTwo={jammerTwo} switch={this.handleJammerSwitch} />
              </div>
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock pause={pause}/>
              </div>
            <div className="clock-button" style={{backgroundColor: this.state.color2}}>
              <OneClock pause={pause}/>
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
