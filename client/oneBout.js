var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var OneTeam = require('./oneTeam');

var OneBout = React.createClass({
  render: function() {
        return (
            <div>
              <div className='clock-button'  style={{backgroundColor: 'red'}}>
                <OneTeam/>
              </div>
              <div className='clock-button'  style={{backgroundColor: 'blue'}}>
              <OneTeam/>
              </div>
            </div>
        );
    }
});

ReactDOM.render(<OneTeam/>, document.getElementById('timers'));