import React from 'React';

export default function MusicNavigator({ onPreviousTrackClick, onNextTrackClick, currentTrackIndex }) {
  console.log(currentTrackIndex);
  return (
    <div>
      <a onClick={onPreviousTrackClick} >prev</a>
      <a onClick={onNextTrackClick}>next</a>
      {currentTrackIndex}
    </div>
  );
}
