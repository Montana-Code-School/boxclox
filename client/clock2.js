var React = require('react');
var CircularProgress = require('material-ui').CircularProgress;
var Clock = React.createClass({
    getDefaultProps: function() {
        return {
            time: 25 * 60 * 1000,
            maxtime: 25 * 60 * 1000,
        };
    },

    getTime: function() {
        var now = new Date(this.props.time).toUTCString();
        return now.slice(23,-4);
    },

    getPercent: function() {
        return 100 - ((this.props.maxtime - this.props.time) / this.props.maxtime * 100);
    },

    render: function() {
        
        return (
            <div className="clock">
               {this.getTime()}
                <div className="circular">
                    <CircularProgress mode="determinate" color="black" value={this.getPercent()} size={2} />
                </div>
            </div>
        );
    }
});

module.exports = Clock;