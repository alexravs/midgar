import { combineReducers } from 'redux'
import playlist from './playlist'
import currentTrackIndex from './currentTrackIndex';
import searchResult from './searchResult';
import currentTrack from './currentTrack';
import traks from './traks';

const gooMusicApp = combineReducers({
  playlist,
  currentTrackIndex,
  currentTrack,
  searchResult,
  traks,
})

export default gooMusicApp
