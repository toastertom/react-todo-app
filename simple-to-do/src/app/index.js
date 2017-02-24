var React = require('react');
const ReactDOM = require('react-dom');

// React Router
import { Router, Route, browserHistory, Link } from 'react-router';

require('./css/index.css');

// Module Requires. Able to do this because of Webpack.
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//Routs
var App = React.createClass({
  render:function () {
    return(
      <Router history={browserHistory}>

        <Route path={"/app"} component={TodoComponent}></Route>

        <Route path={"/about"} component={About}></Route>

      </Router>
    )
  }
});

// Root TodoComponent
const TodoComponent = React.createClass({
  //State
  getInitialState: function () {
    return {
      todos: ['Create a task']
    }
  },

  //Render
  render: function(){
    var todo = this.state.todos;
      todo = todo.map(function (item, index) {
        return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        );
      }.bind(this));
    return(
      <div id="todo-list">
        <Link to={"/about"}>About</Link>
        <p>Title</p>
        <ul>
          {todo}
        </ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }, //Render End.

  // Custome Funtion.
  onDelete: function (item) {
    var updatedTodo = this.state.todos.filter(function (val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodo
    });
  },

  onAdd: function (item){
    var updateTodo = this.state.todos;
    updateTodo.push(item);

    this.setState({
      todos: updateTodo
    })
  },

  // Lifecycle Functions. Great for grabbing external data.
  componentWillMount: function () {
    console.log('componentWillMount');
  },

  componentDidMount: function () {
    console.log('componentDidMount');
  },

  componentWillUpdate: function () {
    console.log('componentWillUpdate');
  }
});

//Put Component into html page.
ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));
