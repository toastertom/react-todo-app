var React = require('react');

require('./css/additem.css');

const AddItem = React.createClass({
  render: function() {
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="New Task" required ref="newItem" />
      <input type="submit" value="Add" />
      </form>
    )
  },

  // Custome Functions

  handleSubmit: function (e){
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

module.exports = AddItem;
