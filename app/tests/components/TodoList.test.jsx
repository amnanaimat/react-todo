var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
//var TodoList = require('TodoList');
var configureStore = require('configureStore');
import connectedTodoList, {TodoList} from 'TodoList';
import connectedTodo, {Todo} from 'Todo';


describe('TodoList',()=>{

	it('should Exist',()=>{

		expect(TodoList).toExist();
	});

});
