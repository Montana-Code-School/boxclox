var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ColorPicker = require('./colorPicker');
var OneClock = require('./oneClock');

var OneTeam = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { color: '#FF0000' };
  },

  changeColor: function(color) {
    this.setState({color: color});
  },
  render: function() {
    return (
        <div>
          <div>
            <input type="text" valueLink={this.linkState('color')} />
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div>
            <ColorPicker valueLink={this.linkState('color')} />
          </div>
        </div>
        );
  },
});

var TwoTeam = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { color: '#FF0000' };
  },
  changeColor: function(color) {
    this.setState({color: color});
  },
  render: function() {
    return (
        <div>
          <div>
            <input type="text" valueLink={this.linkState('color')} />
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div className="clock-button" style={{backgroundColor: this.state.color}}>
            <OneClock/>
          </div>
          <div>
            <ColorPicker valueLink={this.linkState('color')} />
          </div>
        </div>
        );
  },
});

module.exports = OneTeam;
module.exports = TwoTeam;
