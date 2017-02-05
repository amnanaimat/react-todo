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
        text:"some text"
      };
        var result = reducers.addTodoReducer(df([]),df(action));
        expect(result.length).toEqual(1);
        expect(result[0].text).toEqual(action.text);
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
        type: "TOGGLE_TODO",
        id: 123
      };
        var result = reducers.addTodoReducer(df(todos),df(action));
        expect(result[0].done).toEqual(false);
        expect(result[0].completedAt).toEqual(undefined);
    });
  });
});
