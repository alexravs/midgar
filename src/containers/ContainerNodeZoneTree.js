import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCountryLevels, getCountry } from '../reducers/geojsons';
import NodeZoneTree from '../components/NodeZoneTree';
import { loadGeojsonIntoMap } from '../actions/geojsons';

const getLevel = (state, properties) => {
  const levels = getCountryLevels(state).reverse();
  let lastLevel = levels[0];
  levels.forEach((level) => {
    if (!properties.hasOwnProperty(`ID_${level}`)) lastLevel -= 1;
    return properties.hasOwnProperty(`ID_${level}`)
  });
  return lastLevel;
}

const mapStateToProps = (state, { zone, opened, params }) => {
 const level = getLevel(state, zone.properties);
 const lowerLevelZones = getCountry(state, params.code).data[level + 1];
 const zoneChildren = lowerLevelZones ? lowerLevelZones.features.filter(
   (z) => (zone.properties[`ID_${level}`] === z.properties[`ID_${level}`])
 ) : [];
 return {
   name: zone.properties[`NAME_${level}`],
   zoneChildren,
   opened,
 }
}

const mapDispatchToProps = (dispatch, { zone }) => ({
  handleOnClickNode: () => {
    dispatch(loadGeojsonIntoMap(zone));
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NodeZoneTree));
