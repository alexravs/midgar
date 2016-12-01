import * as utils from '../utils/utils';
import { clearSearch } from './index';
import { saveAs } from 'file-saver';
import * as jszip from 'jszip';

const requestGeojson = (countryCode) => ({
  type: 'REQUEST_GEOJSON',
  countryCode,
});

const receiveGeojson = (countryCode, geoJson) => ({
  type: 'RECEIVE_GEOJSON',
  countryCode,
  geoJson
});

export const loadGeojsonIntoMap = (geojson) => ({
  'type': 'LOAD_GEOJSON_INTO_MAP',
  geojson,
})

export const fetchGeojsons = (countryCode) => (dispatch) => {
  dispatch(requestGeojson(countryCode));
  return utils.fetchGeojsons(countryCode).then(geojsons => {
    dispatch(loadGeojsonIntoMap(geojsons.data[0]));
    dispatch(receiveGeojson(countryCode, geojsons.data));
    return dispatch(clearSearch());
  });
};

export const selectCountry = (countryCode) => ({
  type: 'SELECT_COUNTRY',
  countryCode,
});

export const exportGeojson = () => (dispatch, getState) => {
  const zip = new jszip.default();
  zip.file("data.json", JSON.stringify(getState().geojsons.selected));
  zip.generateAsync({type:"blob"}).then((content) => saveAs(content, "geojson.zip"));
};
