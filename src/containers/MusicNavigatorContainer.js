import { connect } from 'react-redux';
import { previousTrack, nextTrack } from '../actions/index.js';
import MusicNavigator from '../components/MusicNavigator';

const mapStateToProps = (state) => {
  return {
    currentTrackIndex: state.currentTrackIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPreviousTrackClick: () => {
      dispatch(previousTrack())
    },
    onNextTrackClick: () => {
      dispatch(nextTrack())
    },
  }
}

const MusicNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicNavigator)

export default MusicNavigatorContainer;
