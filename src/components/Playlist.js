import React from 'react';
import Track from './Track';

export default function Playlist({ playlist, onTrackClick }) {
  return (
    <ul>
    {playlist.map((music) =>
      <Track
        key={`track-${music.id}`}
        onClick={() => {
          onTrackClick(music.id);
        }}
        title={music.title}/>
      )}
    </ul>
  );
}
