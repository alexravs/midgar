import React from 'react';
import Search from '../components/Search';
import MapToShow from '../components/MapToShow';
import { connect } from 'react-redux';
import countries from '../data/countries.json';
import L from 'leaflet';

import { receiveSearchResult } from '../actions/index';

const getMapPosition = (geojson) => L.geoJson(geojson).getBounds().getCenter();

const adjustGeojson = (code) => {
  const geoJson = getGeojsonFor(code);
  geoJson.features[0].geometry.coordinates[0]
    .forEach((e, index, coordinates) => {
      if (index % 2 === 0) {
        console.log("e:", e);
        console.log("index:", index);
        console.log("coordinates:", coordinates);
        coordinates.splice(index, 1);
      }
    });
  return geoJson;
}
//
const getSelectedCountry = (state) => state.geojsons.selected;

const getSelectedGeojson = (state) => state.geojsons.byCode[getSelectedCountry(state)];

const mapStateToProps = (state) => {
  const isFetching = state.geojsons.isFetching;
  const selectedGeojson = state.geojsons.selected;

  // if (isFetching) return {
  //   isFetching,
  //   position: { lat: 50.840431, lng: 4.348609 },
  // };

  if (!selectedGeojson) return {
    position: { lat: 50.840431, lng: 4.348609 },
  }
console.log('show me: ', selectedGeojson);

  return {
    geojson: selectedGeojson,
    countryCode: state.geojsons.countryCode,
    position: getMapPosition(selectedGeojson),
  };
}


const MapContainer = connect(
  mapStateToProps)(MapToShow)

export default MapContainer;
