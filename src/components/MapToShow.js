import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { GeoJson } from 'react-leaflet';
import LoadingSpinner from './LoadingSpinner';
import L from 'leaflet';

const leafletToken = 'pk.eyJ1IjoidmFuYWtlbm0iLCJhIjoiOWNvTG1DWSJ9.O4w4YdN9mbF76M5O6ImYqg';
const leafletProjectId = 'blsq.17ab55a1';

import '../../css/map.scss';
const style = {
  position:'absolute',
  width:'100%',
  height:'100%',
};
const mainStyle = () => ({
  color: 'rgba(39, 174, 96,1.0)',
  weight: 4,
  opacity: 1,
  fillOpacity: 0,
});

function parseGeoJson(geojson) {
  if (typeof geojson !== 'string') return geojson;
  return JSON.parse(geojson);
}

const MapToShoW = ({isFetching, geojson, position, countryCode}) => {
  const latlng = geojson ? L.geoJson(geojson).getBounds() : [
    [40.712, -74.227],
    [40.774, -74.125]
  ];

  return (
    <div>
      <Map
        bounds={latlng}
        zoom={7}
        center={position}
        doubleClickZoom={false}
        keyboard={false}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        { geojson &&
          <GeoJson
            key={`${Math.random()}`}
            clickable={false}
            data={parseGeoJson(geojson)}
            style={mainStyle()}
          /> }
        <TileLayer
          url={`https://api.tiles.mapbox.com/v4/${leafletProjectId}/{z}/{x}/{y}.png?access_token=${leafletToken}`}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
};

export default MapToShoW;
