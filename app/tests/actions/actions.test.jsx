import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
import {firebaseRef} from 'app/firebase/index';
var Action =  require('Action');

var createMockStore  = configureMockStore([thunk]);
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
it('should add todos on fireBase',(done)=>{
  const store = createMockStore({});
  const todoText = 'my todo';
  store.dispatch(Action.startAddTodo(todoText)).then(()=>{
  const actions = store.getActions();
  expect(actions[0]).toInclude({type: 'ADD_TODO'});
  done();
  }).catch(done);
});

it('should generate ADD_TODO action',()=>{
var action= {
  type: "ADD_TODO",
  todo:{
  id:'12345',
  text: "something",
  done: false,
  createdAt: 123456

  }
};
  var result = Action.addTodo(action.todo);
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
  type: "UPDATE_TODO",
  id: 2,
  updates:{done:true}
};
  var result = Action.updateTodo(action.id,action.updates);
  expect(result).toEqual(action);
});

describe('Tests with todos Firebase',()=>{
var testTodoRef;
beforeEach((done)=>{
testTodoRef= firebaseRef.child('todos').push();
testTodoRef.set({
  text:"running",
  done: false,
  createdAt: 123456,
  completedAt: null
}).then(()=>done());
});


afterEach((done)=>{
testTodoRef.remove().then(()=>done());


});

it('should toggle todo and dispatch UPDATE_TODO action',(done)=>{

  const store = createMockStore({});

  var action = Action.startToggleTodo(testTodoRef.key,true);
  store.dispatch(action).then(()=>{
    var mockActions = store.getActions();
    expect(mockActions[0]).toInclude({
      type: 'UPDATE_TODO',
      id: testTodoRef.key
    });
    expect(mockActions[0].updates).toInclude({
    done: true
    });
    done();

  },done);
});


});

});
