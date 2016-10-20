import axios from 'axios';

function fetchPlaylist() {
  return axios.get('http://localhost:3030/musics.json').then((response) => response.data);
}

function fetchPlaylists() {
  return axios.get('http://localhost:3030/playlists.json').then((response) => response.data);
}

function fetchSearchResult(query) {
  return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyCsJoNlImYu5VRmULJToPdzIJjzdKHEKVI`).then((response) => response.data);
}

function getIdByIndex(playlist, currentTrackId) {
  return playlist.items.indexOf(
    playlist.items.filter((music) => music.id === currentTrackId)[0])
}

const music = {
  fetchPlaylist,
  fetchPlaylists,
  fetchSearchResult,
  getIdByIndex
}

export default music;
