import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Youtube from './Youtube';
import PlaylistManager from '../containers/PlaylistManager';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <Route path='/search' component={Youtube} />
        <Route path='/playlists' component={PlaylistManager} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
