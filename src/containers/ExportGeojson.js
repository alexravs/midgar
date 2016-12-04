import React from 'react';
import { connect } from 'react-redux';
import { exportGeojson } from '../actions/geojsons';
import styled from 'styled-components';

const Button = styled.div`
  font-size: 20px;
  padding: 12px;
`;

const ExportGeojson = ({ handleOnClick }) => (
  <Button onClick={handleOnClick} className='pt-button pt-intent-primary'>
    Get Geojson
  </Button>
);

const mapDispatchToProps = (dispatch) => ({
  handleOnClick: () => {
    dispatch(exportGeojson());
  }
});

export default connect(null, mapDispatchToProps)(ExportGeojson);
