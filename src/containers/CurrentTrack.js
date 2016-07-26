import { connect } from 'react-redux';
import { previousTrack, nextTrack } from '../actions/index.js';
import Audio from '../components/Audio';

const mapStateToProps = (state) => {
  return {
    // currentTrack: state.playlist.items.filter((music) => music.id === state.currentTrackIndex)[0],
    currentTrack: state.currentTrack
  }
}

const CurrentTrack = connect(mapStateToProps)(Audio)

export default CurrentTrack;
