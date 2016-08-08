import { connect } from 'react-redux';
import { changeTrack } from '../actions/index.js';
import MusicNavigator from '../components/MusicNavigator';

const mapStateToProps = (state) => {
  return {
    currentTrackIndex: state.currentTrackIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPreviousTrackClick: () => {
      dispatch(changeTrack(-1))
    },
    onNextTrackClick: () => {
      dispatch(changeTrack(1))
    },
  }
}

const MusicNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicNavigator)

export default MusicNavigatorContainer;
