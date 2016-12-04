import React from 'react';
import { connect } from 'react-redux';
import Data from './Data';

import '../../css/data-list.scss';

const DataList = ({ countryCodes }) => (
  <div>
    {
      countryCodes.length > 0 && countryCodes.map((countryCode) => (
        <div className='col-xs-4'>
          <Data countryCode={countryCode} />
        </div>
      ))
    }
    { countryCodes.length === 0 && (
      <p>Please search and select a country.</p>
    )}
  </div>
);

const mapStateToProps = (state, { countryCode }) => ({
  countryCodes: state.geojsons.codes,
})

export default connect(mapStateToProps)(DataList);
