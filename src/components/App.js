import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrecisionSetter from '../containers/PrecisionSetter';
import MapContainer from '../containers/MapContainer';
import ZonesSearch from '../containers/ZonesSearch';
import CountriesPropositions from '../containers/CountriesPropositions';
import Navigation from './Navigation';
import styled from 'styled-components';
import ExportGeojson from '../containers/ExportGeojson';

import '../../css/body.scss';

import {
    Spinner,
} from '@blueprintjs/core';

const MapWrapper = styled.div`
  ${''/* position: 'relative',
  height: '600px',*/}
`;

const Row = styled.div`
  height: 100%;
`;


const Wrapper = styled.section`
  padding: 1em;
`;

const ExportGeojsonWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20px;
`;

const LastCol = styled.div`
  height: 100%;
`;

const App = ({ geojsonOnMap, children }) => (
  <div className="app">
    <Row className="row">
      <MapContainer />
      <div className="col-xs-5 pt-card pt-elevation-3">
        <Navigation />
        <Wrapper>
          { children }
        </Wrapper>
      </div>
      <div className="col-xs-5" />
      <LastCol className="col-xs-2">
        {
          geojsonOnMap &&
          <ExportGeojsonWrapper>
            <ExportGeojson />
          </ExportGeojsonWrapper>
        }
      </LastCol>
    </Row>
  </div>
);

const mapStateToProps = (state, { children }) => ({
  children,
  geojsonOnMap: state.geojsons.selected,
});

export default connect(mapStateToProps)(App);
