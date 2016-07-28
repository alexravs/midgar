import React, { PropTypes } from 'react';

const propTypes = {
  currentTrack: PropTypes.object,
}

export default function Audio({ currentTrack }) {
  if (!currentTrack) return <div>no zik</div>;

  return (
    <div>
      <h2>{currentTrack.title}</h2>
      <audio autoPlay="autoplay" controls="controls" src={currentTrack.url}>
      </audio>
    </div>
  );
}

Audio.PropTypes = propTypes;
