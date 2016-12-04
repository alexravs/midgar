import { normalize } from 'normalizr';
import * as schema from './schema';

export const requestSearchResult = () => {
  return {
    type: 'REQUEST_SEARCH_RESULT',
  }
}

export const receiveSearchResult = (query, searchResult) => {
  return {
    type: 'RECEIVE_SEARCH_RESULT',
    query,
    searchResult,
  }
}

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
})

export const select_country = (code) => {
  return {
    type: 'SELECT_COUNTRY',
    code,
  }
}

export function fetchSearchResult(query) {
  return function(dispatch) {
    dispatch(requestSearchResult());
    return music.fetchSearchResult(query)
      .then(searchResult => {
        console.log(searchResult);
        return dispatch(receiveSearchResult(query, searchResult.items));
      });
  };
}

