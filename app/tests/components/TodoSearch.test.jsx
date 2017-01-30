var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var TodoSearch = require('TodoSearch');



describe('TodoSearch',()=>{
	
	it('should Exist',()=>{
		
		expect(TodoSearch).toExist();
	});
	
	it('should call onSearch when input field changed',()=>{
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		
		//var $el = $(ReactDOM.findDOMNode(todosearch));
		todosearch.refs.searchText.value = 'abc';
		TestUtils.Simulate.change(todosearch.refs.searchText);
		expect(spy).toHaveBeenCalledWith(false,'abc');
	});
	it('should call onSearch with proper Checked Value',()=>{
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		
		//var $el = $(ReactDOM.findDOMNode(todosearch));
		todosearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todosearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(true,'');
	});
	
	
});
