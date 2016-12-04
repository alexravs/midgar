import { combineReducers } from 'redux'
import searchResult from './searchResult';
import geojsons from './geojsons';
import map from './map';


const midgarApp = combineReducers({
  searchResult,
  geojsons,
  map,
})

export default midgarApp;
