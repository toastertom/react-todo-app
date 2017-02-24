var React = require('react');

require('./css/todoitem.css');

// TodoItem component.

var TodoItem = React.createClass({
  render: function () {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}> x </span>
        </div>

      </li>
    );
  },

  // Handle Functions.

  handleDelete: function () {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
