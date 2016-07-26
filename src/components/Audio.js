import React, { PropTypes } from 'react';

const propTypes = {
  currentTrack: PropTypes.object,
}

export default function Audio({ currentTrack }) {
  if (!currentTrack) return <div>no zik</div>;
  console.log(currentTrack);
  return (
    <div>
      <h2>{currentTrack.title}</h2>
      <audio controls src={currentTrack.url}>
        <source src={currentTrack.url} type="audio/ogg" />
      </audio>
    </div>
  );
}

Audio.PropTypes = propTypes;
