var expect = require('expect');
var Action =  require('Action');


describe("Action",()=>{

it('should Exist',()=>{

  expect(Action).toExist();
});
it('should generate SET_SEARCH_TEXT action',()=>{
var action= {
  type: "SET_SEARCH_TEXT",
  searchText: "Dog"
};
  var result = Action.setSearchText(action.searchText);
  expect(result).toEqual(action);
});

it('should generate ADD_TODO action',()=>{
var action= {
  type: "ADD_TODO",
  text: "Dog"
};
  var result = Action.addTodo(action.text);
  expect(result).toEqual(action);
});
it('should generate ADD_TODOS action',()=>{

var todos = [{
  id: 1,
  text: 'Do something',
  completed: false,
  completedAt: undefined,
  createdAt: 500
}, {
  id: 2,
  text: 'Check mail',
  completed: false,
  completedAt: undefined,
  createdAt: 500
}];
var action= {
  type: "ADD_TODOS",
  todos: todos
};
  var result = Action.addTodos(action.todos);
  expect(result).toEqual(action);
});

it('should generate toggleShowCompleted action',()=>{
var action= {
  type: "TOGGLE_SHOW_COMPLETED",
};
  var result = Action.toggleShowCompleted();
  expect(result).toEqual(action);
});
it('should generate toggleTodo action',()=>{
var action= {
  type: "TOGGLE_TODO",
  id: 2
};
  var result = Action.toggleTodo(action.id);
  expect(result).toEqual(action);
});

});
