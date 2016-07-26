import React, { Component } from 'react';
import music from '../utils/music';
import MusicNavigatorContainer from '../containers/MusicNavigatorContainer';
import PlaylistManager from '../containers/PlaylistManager';
import CurrentTrack from '../containers/CurrentTrack';
import YoutubeSearch from '../containers/YoutubeSearch';
import Youtube from '../containers/Youtube';

export default class App extends Component {
  render() {
    return (
      <div>
        <PlaylistManager />
        <CurrentTrack />
        <MusicNavigatorContainer />
        <YoutubeSearch />
        <Youtube />
      </div>
    );
  }
}
