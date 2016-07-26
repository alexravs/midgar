const searchResult = (state = {
  isFetching: false,
  searchQuery: '',
  items: [],
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
      })
    default:
      return state
  }
}

export default searchResult
