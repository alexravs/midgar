import React, { Component } from 'react';
import music from '../utils/music';
import MusicNavigatorContainer from '../containers/MusicNavigatorContainer';
import PlaylistManager from '../containers/PlaylistManager';
import CurrentTrack from '../containers/CurrentTrack';
import YoutubeSearch from '../containers/YoutubeSearch';
import YoutubePropositions from '../containers/YoutubePropositions';
import LeftMenu from './LeftMenu';
import Main from './Main';


export default class App extends Component {
  render() {
    return (
      <div>
        <LeftMenu />
        <Main>
          {this.props.children}
          <CurrentTrack />
          <MusicNavigatorContainer />
        </Main>
      </div>
    );
  }
}
