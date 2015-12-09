var React = require('react');
var Blink = require('./blink');

var Clock = React.createClass({
  propTypes: {
    time: React.PropTypes.number
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
    var stand = new Audio('../sounds/stand.aiff');
    var done = new Audio('./sounds/done.aiff');
    if (this.getTime() < 13 && this.getTime() > 10) {
      return (
      <p>Color Number Stand <br/><Blink><audio autoPlay> <source src="./sounds/stand.mp3"/></audio>
      {this.getTime()}</Blink></p>
      );
    } else if (this.getTime() < 3) {
      return (
      <p>Color Number Done <br/><Blink><audio autoPlay> <source src="./sounds/done.mp3"/></audio>{done.play()}{this.getTime()}</Blink></p>
      );
    } else {
      return (

      <h2>{this.getTime()}</h2>
      );
    }
  }
});

module.exports = Clock;
