import React from 'react'

const Playlists = ({ playlists }) => (
  <ul>
    {playlists.map(playlist => (
      <li> { playlist.title } </li>
    ))}
  </ul>
)

export default Playlists
