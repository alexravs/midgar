const currentTrackIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_TRACK_ID':
      return action.id
    case 'PREVIOUS_TRACK':
      return state - 1;
    case 'NEXT_TRACK':
      return state + 1;
    default:
      return state
  }
}

export default currentTrackIndex
