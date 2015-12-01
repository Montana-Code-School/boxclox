React = require('react');


var App = React.createClass({
   render: function() {
       return (
                <div>
                    <h1>Hello world</h1>
                </div>
       );
   }
});

React.render(<App/>, document.getElementById("timer-here"));