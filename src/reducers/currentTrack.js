const currentTrack = (state = {
  title: '',
  url: ''
} , action) => {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        title: action.title,
        url: action.url
      }
    default:
      return state
  }
}

export default currentTrack
