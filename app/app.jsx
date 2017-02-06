var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');


var action = require('Action');
var store = require('configureStore').configure();







// Subscribe to changes
 var unsubscribe = store.subscribe(() => {
  var state = store.getState();


  console.log('New state', store.getState());
});
// unsubscribe();



store.dispatch(action.addTodo('Running a horse'));

store.dispatch(action.setSearchText('Running'));
store.dispatch(action.toggleShowCompleted());


$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');

ReactDOM.render(
  <Provider store={store}>
  <TodoApp />
  </Provider>,
  document.getElementById('app')
);
