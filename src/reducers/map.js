import { combineReducers } from 'redux'

const precision = (state = 100, action) => {
  switch (action.type) {
    case 'CHANGE_PRECISION':
      return action.precision;
    default:
      return state
  }
};

const position = (state = {
  lat: 50.840431,
  lng: 4.348609
}, action) => {
  switch (action.type) {
    case 'CHANGE_POSITION':
      return Object.assign({}, state, action.position);
    default:
      return state
  }
};

export default combineReducers({
  precision,
  position,
})
