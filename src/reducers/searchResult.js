const searchResult = (state = {
  isFetching: false,
  searchQuery: '',
  items: [],
  selected: '',
}, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH_RESULT':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_SEARCH_RESULT':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.searchResult,
        searchQuery: action.searchQuery,
      });
    case 'CLEAR_SEARCH':
      return Object.assign({}, state, {
        searchQuery: '',
        items: [],
      });
    case 'SELECT_COUNTRY':
      console.log("in SELECT country ha fou:", action);
      return Object.assign({}, state, {
        selected: action.countryCode
      });
    default:
      return state
  }
}

export default searchResult
