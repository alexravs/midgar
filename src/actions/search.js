import {
  getZones,
  getCurrentCountry,
  getCountryLevels
} from '../reducers/geojsons';

import { receiveSearchResult } from './index';

const zoneCanBeFiltered = (zone, level, searchTerm) => {
  const properties = zone.properties;
  return properties.hasOwnProperty(`NAME_${level}`) &&
    properties['NAME_' + level] &&
    !properties.hasOwnProperty(`NAME_${level+1}`) &&
    (properties[`NAME_${level}`].toLowerCase().includes(searchTerm) ||
    (properties[`VARNAME_${level}`] &&
     properties[`VARNAME_${level}`].toLowerCase().includes(searchTerm)));
}

export const searchZones = (searchTerm) => (dispatch, getState) => {
  const levels = getCountryLevels(getState()).reverse();;
  const filtered = getZones(getState()).filter((zone) =>
    levels.some((level) => zoneCanBeFiltered(zone, level, searchTerm))
  );
  dispatch(receiveSearchResult(searchTerm, filtered))

  console.log('filtered: ', filtered);
};

