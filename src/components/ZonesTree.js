import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../reducers/geojsons';
import ContainerNodeZoneTree from '../containers/ContainerNodeZoneTree';

const ZonesTree = ({ rootZones }) => (
  <div className="">
    <ul>
      {rootZones.map((zone) => (
        <ContainerNodeZoneTree zone={zone} opened={false} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state, { params: { code } }) => ({
  rootZones: getCountry(state, code).data[1].features,
});

export default connect(mapStateToProps)(ZonesTree);
