import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYLISTS':
      return {
        ...state,
        ...action.response.entities.playlists,
      }
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_PLAYLISTS':
      state = true;
    case 'RECEIVE_PLAYLISTS':
      state = false;
    default:
      return state
  }
}


const playlists = combineReducers({
  byId,
  isFetching,
})

export default playlists

export const getPlaylist = (state, id) => state.byId[id];

export const all = (state) => {
  return state.ids.map((id) => getPlaylist(state, id));
}


























// Ecole Polytechnique Federale De Laussanne (Coursera)
// Specialization, Functional Programming (Scala)

// University Of Johns Hopkins (Cousera)
// Specialization, Full-Stack/RoR Web Development




// UC San Diego - HSE (Coursera)
// Specialization, Computer Science


// Coursera - Rice University
// Specialization, Computer Science







// Coursera - The University Of New Mexico
// Specialization, Web Application Development (Modern Full-Stack Architectures)
