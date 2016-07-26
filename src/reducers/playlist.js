const playlist = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_PLAYLIST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_PLAYLIST':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.playlist,
      })
    default:
      return state
  }
}

export default playlist
