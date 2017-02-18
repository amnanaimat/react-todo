var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp'
import Login from 'Login';



var action = require('Action');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');



// Subscribe to changes

store.dispatch(action.startaddTodos());
$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');
ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
     <Route path="/">
 	<IndexRoute   component={Login}/>
 	<Route  path="todos" component={TodoApp}/>
     </Route>
   </Router>
  </Provider>,
  document.getElementById('app')
);
