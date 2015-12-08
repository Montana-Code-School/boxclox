var React = require('react');
var CircularProgress = require('material-ui').CircularProgress;
var Blink = require('./blink');

var Clock = React.createClass({

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
    if (this.getTime() < 13 && this.getTime() > 10) {
      return (
      <p><Blink>{this.getTime()}</Blink></p>
      );
    } else if (this.getTime() < 3) {
      return (
      <p><Blink>{this.getTime()}</Blink></p>
      );
    } else {
      return (
      <p>{this.getTime()}</p>
      );
    }
  }
});

module.exports = Clock;
