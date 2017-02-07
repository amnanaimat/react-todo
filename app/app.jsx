var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');


var action = require('Action');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');



// Subscribe to changes
 store.subscribe(() => {
  var state = store.getState();


  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});
var initialState = TodoAPI.getTodos();
store.dispatch(action.addTodos(initialState));
$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');
ReactDOM.render(
  <Provider store={store}>

  <TodoApp />
  </Provider>,
  document.getElementById('app')
);
