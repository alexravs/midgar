import { combineReducers } from 'redux'
import playlist from './playlist'
import currentTrackIndex from './currentTrackIndex';
import searchResult from './searchResult';
import currentTrack from './currentTrack';

const gooMusicApp = combineReducers({
  playlist,
  currentTrackIndex,
  currentTrack,
  searchResult,
})

export default gooMusicApp
