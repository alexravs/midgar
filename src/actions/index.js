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
        console.log(playlist);
        // dispatch(setTrackId(playlist[0].id));
        // playlist
        const { title, url } = playlist[0];
        console.log(title);
        console.log(url);
        dispatch(setTrack(title, url));
        return dispatch(receivePlaylist(playlist));
      });
  };
}

export const previousTrack = (id) => {
    return (dispatch, getState) => {
        const { playlist, currentTrackIndex } = getState();
        const indexOfId = playlist.items.indexOf(playlist.items.filter((music) => music.id === currentTrackIndex)[0])
        return dispatch(setTrackId(playlist.items[indexOfId - 1].id));
    }
}

export const nextTrack = () => {
    return (dispatch, getState) => {
        const { playlist, currentTrackIndex } = getState();
        const indexOfId = playlist.items.indexOf(playlist.items.filter((music) => music.id === currentTrackIndex)[0])
        return dispatch(setTrackId(playlist.items[indexOfId + 1].id));
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
