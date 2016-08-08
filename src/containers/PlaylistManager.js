import React from 'react';
import Playlist from '../components/Playlist';
import { connect } from 'react-redux';
import { fetchPlaylist, setTrack, setTrackId } from '../actions/index';

class PlaylistManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrackClick = this.handleTrackClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlaylist());
  }

  handleTrackClick(id, title, url) {
    const { dispatch } = this.props;
    dispatch(setTrackId(id));
    dispatch(setTrack(title, url));
  }

  render() {
    const { isFetching, items } = this.props.playlist;

    return (
      <div>
        { isFetching && <p>Loading</p>}
        {
          (!isFetching && items.length > 0) &&
          <Playlist playlist={items} onTrackClick={this.handleTrackClick} />
        }
        {
          (!isFetching && items.length === 0) &&
          <p> No musics </p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist
  }
}

export default connect(mapStateToProps)(PlaylistManager);
