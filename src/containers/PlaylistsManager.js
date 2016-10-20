import React from 'react';
import Playlist from '../components/Playlist';
import * as playlists from '../reducers/playlists'
import { connect } from 'react-redux';
import { fetchPlaylists, setTrack, setTrackId } from '../actions/index';

class PlaylistManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrackClick = this.handleTrackClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlaylists());
  }

  handleTrackClick(id, title, url) {
    // const { dispatch } = this.props;
    // dispatch(setTrackId(id));
    // dispatch(setTrack(title, url));
  }

  render() {
    const { isFetching, playlists } = this.props;

    return (
      <div>
        { isFetching && <p>Loading</p>}
        {
          (!isFetching && playlists.length > 0) &&
          <Playlist playlist={playlists} onTrackClick={this.handleTrackClick} />
        }
        {
          (!isFetching && playlists.length === 0) &&
          <p> No musics </p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: playlists.all(state),
    isFetching: state.playlists.isFetching
  }
}

export default connect(mapStateToProps)(PlaylistManager);
