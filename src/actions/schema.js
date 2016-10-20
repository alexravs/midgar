import { Schema, arrayOf } from 'normalizr';

export const track = new Schema('tracks');
export const arrayOfTracks = arrayOf(track);

export const playlist = new Schema('playlists');
export const arrayOfPlaylists = new Schema('playlist');
