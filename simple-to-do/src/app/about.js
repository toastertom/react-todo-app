var React = require('react');
import {Link} from 'react-router';

var About = React.createClass({
    render: function(){
        return(
          <div>
            <h2>All about me</h2>
            <Link to={"/app"}>Todo List</Link>
          </div>
        );
    }
});

module.exports = About;
