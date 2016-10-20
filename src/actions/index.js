import { normalize } from 'normalizr';
import * as schema from './schema';
import music from '../utils/music';
import youtube from '../utils/youtube';

export const requestPlaylist = () => {
  return {
    type: 'REQUEST_PLAYLIST',
  }
}

export const receivePlaylist = (playlist) => {
  return {
    type: 'RECEIVE_PLAYLIST',
    playlist,
  }
}

export const requestPlaylists = () => {
  return {
    type: 'REQUEST_PLAYLISTS',
  }
}

export const receivePlaylists = (response) => {
  return {
    type: 'RECEIVE_PLAYLISTs',
    response: (response, schema.arrayOfPlaylists),
  }
}

export const requestTracks = () => ({
  type: 'REQUEST_TRACKS'
})

export const receiveTracks = (response) => ({
  type: 'RECEIVE_TRACKS',
  response: normalize(response, schema.arrayOfTracks)
})

export const requestSearchResult = () => {
  return {
    type: 'REQUEST_SEARCH_RESULT',
  }
}

export const receiveSearchResult = (query, searchResult) => {
  return {
    type: 'RECEIVE_SEARCH_RESULT',
    query,
    searchResult,
  }
}


export const setTrackId = (id) => {
  return {
    type: 'SET_TRACK_ID',
    id
  }
}

export const setTrack = (title, url) => {
  return {
    type: 'SET_TRACK',
    title,
    url
  }
}

export function fetchPlaylist() {
  return function(dispatch) {
    dispatch(requestPlaylist());
    return music.fetchPlaylist()
      .then(playlist => {
        const { title, url, id } = playlist[0];
        dispatch(setTrackId(id));
        dispatch(setTrack(title, url));
        console.log(playlist);
        dispatch(receiveTracks(playlist)); // to delete at some point;
        return dispatch(receivePlaylist(playlist));
      });
  };
}

export function fetchPlaylists() {
  return function(dispatch) {
    dispatch(requestPlaylists());
    return music.fetchPlaylists()
      .then(playlists => {
        console.log(playlists);
        return dispatch(receivePlaylists(playlists));
      });
  };
}

export const changeTrack = (change) => {
    return (dispatch, getState) => {
        const { playlist, currentTrackIndex } = getState();
        const indexOfId = music.getIdByIndex(playlist, currentTrackIndex);
        const { id, title, url } = playlist.items[indexOfId + change];
        dispatch(setTrackId(id));
        return dispatch(setTrack(title, url));
    }
}

export function fetchSearchResult(query) {
  return function(dispatch) {
    dispatch(requestSearchResult());
    return music.fetchSearchResult(query)
      .then(searchResult => {
        console.log(searchResult);
        return dispatch(receiveSearchResult(query, searchResult.items));
      });
  };
}

export function fetchYoutubeMp3(youtubeVideoId, title) {
  return function(dispatch) {
    return youtube.fetchMp3FromVideoId(youtubeVideoId)
      .then(mp3Url => {
        console.log(mp3Url);
        return dispatch(setTrack(title, mp3Url));
      });
  };
}
