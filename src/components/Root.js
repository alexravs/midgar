import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CountriesPropositions from '../containers/CountriesPropositions';
import DataList from '../components/DataList';
import Country from '../components/Country';
import ZonesTree from './ZonesTree';
import ZonesSearchPropositions from './ZonesSearchPropositions';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ CountriesPropositions } />
        <Route component={ CountriesPropositions } path='/search' />
        <Route component={ DataList } path='/data' />
        <Route component={ Country } path='/data/:code' >
          <IndexRoute component={ ZonesTree } />
          <Route component={ ZonesSearchPropositions } path='/data/:code/search' />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
