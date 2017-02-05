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
});
