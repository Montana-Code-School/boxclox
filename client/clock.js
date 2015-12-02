var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
   render: function() {
       return (
                <div>
                    <h1>Hello world</h1>
                </div>
       );
   }
});

ReactDOM.render(<App/>, document.getElementById("timer-here"));