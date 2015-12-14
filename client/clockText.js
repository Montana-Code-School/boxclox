var React = require('react');

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
    if (this.getTime() < 13 && this.getTime() > 11.7) {
      return (
      <p>Color Number Stand <br/>{this.getTime()}</p>
      );
    } else if (this.getTime() <= 11.7 && this.getTime() > 10) {
      return (
      <p>Color Number Stand <br/><audio autoPlay><source src="./sounds/stand.mp3"/></audio>{this.getTime()}</p>
      );
    } else if (this.getTime() < 3 && this.getTime() > 1.2) {
      return (
      <p>Color Number Done <br/>{this.getTime()}</p>
      );
    } else if (this.getTime() <= 1.2) {
      return (
      <p>Color Number Done <br/><audio autoPlay><source src="./sounds/done.mp3"/></audio>{this.getTime()}</p>
      );
    } else {
      return (
      <h2>{this.getTime()}</h2>
      );
    }
  }
});

module.exports = Clock;
