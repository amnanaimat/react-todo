var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');


$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
