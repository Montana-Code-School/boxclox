var blacklist = require('blacklist');
var React = require('react');

var Blink = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    duration: React.PropTypes.number
  },
  getDefaultProps() {
    return { duration: 100};
  },
  getInitialState() {
    return { visible: true };
  },
  componentDidMount() {
    this.blink();
  },
  blink() {
    if (!this.isMounted()) return;
    this.setState({ visible: !this.state.visible });
    setTimeout(this.blink, this.props.duration);
  },
  render() {
    var props = blacklist(this.props, 'children', 'duration');
    props.style = { visibility: this.state.visible ? 'visible' : 'hidden' };
    return (
      <span {...props}>{this.props.children}</span>
    );
  }
});

module.exports = Blink;
