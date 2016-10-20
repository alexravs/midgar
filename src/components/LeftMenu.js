import React from 'react';
import { Link } from 'react-router'

export default function LeftMenu() {
  return (
    <div className="col-xs-2">
      <ul>
        <li><Link to='/playlists'>Playlists</Link></li>
        <li><Link to='/search'>Youtube Search</Link></li>
      </ul>
    </div>
  );
}
