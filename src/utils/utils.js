import axios from 'axios';

export const fetchGeojsons = (countryCode) =>
  axios.get(`https://s3-eu-west-1.amazonaws.com/geojson-countries/${countryCode}.geo.json`)
    .then((response) => response.data);
