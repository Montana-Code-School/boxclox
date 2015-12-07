var React = require('react');
var ReactDOM = require('react-dom');


var ColorPicker = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    valueLink: React.PropTypes.shape({ // TODO: what about React.PropTypes.link(...)?
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    })
  },

  getDefaultProps: function() {
    return {
      value: '',
      onChange: function() {},
      valueLink: null
    };
  },

  componentDidMount: function() {
    jQuery(this.getDOMNode()).colorPicker({
      pickerDefault: this.getValueLink(this.props).value,
      onColorChange: this.onColorChange
    });
  },

  componentWillReceiveProps: function(nextProps) {
    var currentValueLink = this.getValueLink(this.props);
    var nextValueLink = this.getValueLink(nextProps);
    if (currentValueLink.value !== nextValueLink.value) {
      var node = jQuery(this.getDOMNode());
      node.val(nextValueLink.value);
      node.change();
    }
  },

  onColorChange: function(id, color) {
    this.getValueLink(this.props).requestChange(color);
  },
  getValueLink: function(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  },
  render: function() {
    return <div />;
  },
});

module.exports = ColorPicker;
