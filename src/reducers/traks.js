import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TRACKS':
      return {
        ...state,
        ...action.response.entities.tracks,
      }
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_TRACKS':
      state = true;
    case 'RECEIVE_TRACKS':
      state = false;
    default:
      return state
  }
}

const filterByPlaylistId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYLISTS':
      const tracksByPlaylistId = {};
      action.response.result.forEach((id) => {
        ids[id] = {};
      });
      return {
        ...state,
        ...tracksByPlaylistId,
      }
    case 'RECEIVE_TRACKS':
      // still need to be implemented... Will need the playlist id which should be passed via the action.
      //
    default:
      return state
  }
}

const traks = combineReducers({
  byId,
  isFetching,
  // filterByPlaylistId
});

export default traks
