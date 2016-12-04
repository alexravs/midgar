import { combineReducers } from 'redux'

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_GEOJSON':
      return true;
    case 'RECEIVE_GEOJSON':
      return false;
    default:
      return state
  }
};

const codes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_GEOJSON':
      return [
        ...state,
        action.countryCode
      ];
    default:
      return state
  }
}

const byCode = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_GEOJSON':
      state[action.countryCode] = {
        data: [],
        isFetching: true,
      };
      return Object.assign({}, state);
    case 'RECEIVE_GEOJSON':
      state[action.countryCode] = {
        data: action.geoJson,
        isFetching: false,
      };
      return Object.assign({}, state);
    default:
      return state
  }
};

// const selected = (state = '', action) => {
//   switch (action.type) {
//     case 'SELECT_COUNTRY':
//       return action.countryCode
//     default:
//       return state
//   }
// };

const selected = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_GEOJSON_INTO_MAP':
      return action.geojson
    default:
      return state
  }
};

export default combineReducers({
  isFetching,
  codes,
  byCode,
  selected,
})

export const getCurrentCountry = (state) => {
  const geojsons = state.geojsons;
  const { byCode } = geojsons;
  return byCode[state.searchResult.selected];
}

export const getChildrenZones = (id, level) => {
  
}

export const getCountry = (state, countryCode) => {
  const geojsons = state.geojsons;
  const { byCode } = geojsons;
  return byCode[countryCode];
}

export const getCountryName = (state, countryCode) =>
  getCountry(state, countryCode).data[0].features[0].properties.NAME_ENGLI;

export const getCountryLevels = (state, countryCode) => Array.from(
  Array(getCurrentCountry(state).data.length),
  (x,i)=>i
);

export const getZones = (state) => {
  const country = getCurrentCountry(state);
  console.log('count: ', country);
  return country.data.reduce((prevLevel, currLevel) =>
    prevLevel.concat(currLevel.features),
    country.data[0].features
  );
};
