var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var TextField = require('material-ui/lib/text-field');

var ColorPicker = require('./colorPicker');
var OneClock = require('./oneClock');

var Bout = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      color: '#FF0000',
      color2: '#00FF00',
      pause: true,
      jammerOne: 300000,
      jammerTwo: 300000
    };
  },
  getPauseInfo: function() {
    if (this.state.pause) {
      return 'fa fa-pause';
    } else {
      return 'fa fa-play';
    }
  },
  handleJammerSwitch: function(time, isRunning, clockId) {
    console.log('switch!' + time + isRunning + clockId);
    if (clockId === 'jOne') {
      this.setState({jammerTwo: time});
    }
    if (clockId === 'jTwo') {
      this.setState({jammerOne: time});
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
          <div className="col-md-4 col-md-offset-2">
            <h3> Home Team </h3>
            <div>
              <TextField hintText="Enter Home Team Color" floatingLabelText="Home Team Color:" onChange={this.changeColorText} />
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color, color: (this.state.color !== 'white' ? 'white' : 'black')}}>
              <OneClock pause={pause} jammerOne={jammerOne} switch={this.handleJammerSwitch}/>
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
              <OneClock pause={pause}/>
            </div>
            <div className="clock-button" style={{backgroundColor: this.state.color}}>
              <OneClock pause={pause}/>
            </div>
            </div>
            <div className="col-md-4">
             <h3> Visitors </h3>
              <div>
                <TextField hintText="Enter Visitor Team Color" floatingLabelText="Visitor Team Color:" onChange={this.changeColorText2} />
              </div>
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock pause={pause} jammerTwo={jammerTwo} switch={this.handleJammerSwitch}/>
              </div>
              <div className="clock-button" style={{backgroundColor: this.state.color2}}>
                <OneClock pause={pause}/>
              </div>
            <div className="clock-button" style={{backgroundColor: this.state.color2}}>
              <OneClock pause={pause}/>
            </div>
            </div>
            <div className="col-md-8 col-md-offset-2 center">
              <button className="reset-all" onClick={this.handlePauseAll}><i className={this.getPauseInfo()}></i> ALL</button>
              <ColorPicker value={this.state.color} onChange={this.changeColor} />
              <ColorPicker value={this.state.color2} onChange={this.changeColor2} />
            </div>
          </div>
        );
  },

});

ReactDOM.render(<Bout/>, document.getElementById('timers'));
