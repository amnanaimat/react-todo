var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var configureStore = require('configureStore');
import {TodoApp} from 'TodoApp'
import TodoList from 'TodoList';



describe('TodoApp',()=>{

	it('should Exist',()=>{

		expect(TodoApp).toExist();
	});
	it('should render todoList',()=>{
	var store = configureStore.configure();
	var provider = TestUtils.renderIntoDocument(<Provider store={store}>
  <TodoApp />
  </Provider>);
	var todoapp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
	var todolist = TestUtils.scryRenderedComponentsWithType(todoapp,TodoList);

	expect(todolist.length).toEqual(1);

	});

});
