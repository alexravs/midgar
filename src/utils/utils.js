import axios from 'axios';

export const fetchGeojsons = (countryCode) =>
  axios.get(`http://localhost:3030/geojsons/${countryCode}`)
    .then((response) => response.data);
