import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
import firebase,{firebaseRef} from 'app/firebase/index';
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
it('should generate logIn action Object',()=>{
var action = {
type:'LOGIN',
uid:'123abc'
};

var res = Action.logIn(action.uid);
expect(res).toEqual(action);

});


it('should generate logOut action Object',()=>{
var action = {
type:'LOGOUT'
};

var res = Action.logOut();
expect(res).toEqual(action);

});
it('should generate ADD_TODOS action Object',()=>{

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
var uid;
var todosRef;



beforeEach((done)=>{
	firebase.auth().signInAnonymously().then((user)=>{
	uid = user.id;
	todosRef = firebaseRef.child(`users/${uid}/todos`);
	
	return todosRef.remove()
	
}).then(()=>{
	testTodoRef = todosRef.push();
	return  testTodoRef.set({
      text:"Something to do",
      done: false,
      createdAt: 123456,
      completedAt: null
    });
}).then(()=>done()).catch();
	
	
	
 
  });



afterEach((done)=>{
todosRef.remove().then(()=>done());


});

it('should toggle todo and dispatch UPDATE_TODO action',(done)=>{

  const store = createMockStore({auth:{uid}});

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

it(' dispatch ADD_TODOS action',(done)=>{

  const store = createMockStore({auth:{uid}});

  var action = Action.startaddTodos();
  store.dispatch(action).then(()=>{
    var mockActions = store.getActions();
    expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');

        done();

  },done);
});

it('should add todos on fireBase',(done)=>{
  const store =  createMockStore({auth:{uid}});
  const todoText = 'my todo';
  store.dispatch(Action.startAddTodo(todoText)).then(()=>{
  const actions = store.getActions();
  expect(actions[0]).toInclude({type: 'ADD_TODO'});
  done();
  }).catch(done);
});


});

});
