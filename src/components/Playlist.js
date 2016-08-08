import React from 'react';
import Track from './Track';

export default function Playlist({ playlist, onTrackClick }) {
  return (
    <ul>
    {playlist.map((music) =>
      <Track
        key={`track-${music.id}`}
        onClick={() => {
          const { id, title, url } = music;
          onTrackClick(id, title, url);
        }}
        title={music.title}/>
      )}
    </ul>
  );
}
