import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flag from './Flag';
import { getCountryName, getCountry } from '../reducers/geojsons';

import '../../css/data.scss';

const Data = ({ countryName, alpha2code, alpha3code }) => (
  <Link to={{pathname: `/data/${alpha3code.toLowerCase()}`, query: { alpha2code } }} >
    <div role="button" className="pt-button pt-minimal text-center data-button" tabIndex="0">
      <Flag alpha2code={alpha2code} />
      { countryName }
    </div>
  </Link>
);

const mapStateToProps = (state, { countryCode }) => ({
  countryName: getCountryName(state, countryCode),
  alpha2code: getCountry(state, countryCode).data[0].features[0].properties.ISO2,
  alpha3code: getCountry(state, countryCode).data[0].features[0].properties.ISO,
})

export default connect(mapStateToProps)(Data);
