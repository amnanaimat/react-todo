var expect =  require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe("Reducers",()=>{
describe('searchTextReducer',()=>{
  it("should set searchText ",()=>{
    var action= {
      type: "SET_SEARCH_TEXT",
      searchText: "Dog"
    };
      var result = reducers.searchTextReducer(df(''),df(action));
      expect(result).toEqual(action.searchText);
  });
});
describe('showCompeletedReducer',()=>{
  it("should toggle  showCompeleted",()=>{
    var action= {
      type: "TOGGLE_SHOW_COMPLETED",
    };
      var result = reducers.showCompeletedReducer(df(''),df(action));
      expect(result).toEqual(true);
  });
});

  describe('addTodoReducer',()=>{
    it("should add todos",()=>{
      var action= {
        type: "ADD_TODO",
        todo:{
        id:'12345',
        text: "something",
        done: false,
        createdAt: 123456

        }
      };
        var result = reducers.addTodoReducer(df([]),df(action));
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(action.todo);
    });

    it("should add todos in bulk",()=>{
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
        var result = reducers.addTodoReducer(df([]),df(action));
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(todos[0]);
    });
  });
  describe('addTodoReducer',()=>{
    it("should toggle todos",()=>{
      var todos = [{id: 123,
			text: "action.text",
			done: true,
			createdAt: 123,
			completedAt: 1234}];
      var action= {
        type: "UPDATE_TODO",
        id: todos[0].id,
        updates: {done:false,
        completedAt: null}
      };
        var result = reducers.addTodoReducer(df(todos),df(action));
        expect(result[0].done).toEqual(false);
        expect(result[0].completedAt).toEqual(action.updates.completedAt);
    });
	
	 it("should wipeout todos on logout6",()=>{
      var todos = [{id: 123,
			text: "action.text",
			done: true,
			createdAt: 123,
			completedAt: 1234}];
      var action= {
        type: "LOGOUT"
      };
        var result = reducers.addTodoReducer(df(todos),df(action));
        expect(result.length).toEqual(0);
    });
  });


  describe('authReducer',()=>{
    it("should store uid on Login",()=>{
    var action= {
      type: "LOGIN",
      uid:'123abd'
    };
        var result = reducers.authReducer(df({}),df(action));
        expect(result.uid).toEqual(action.uid);
    });

    it("should wipe out  on LogOut",()=>{
    const authData = {
    uid: '1233'
    }
    const action= {
      type: "LOGOUT"
    };
        const result = reducers.authReducer(df(authData),df(action));
        expect(result).toEqual({});
    });
  });
});
