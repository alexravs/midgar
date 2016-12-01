import React from 'react';
import { Link } from 'react-router';

import '../../css/data-navigation.scss';


const DataNavigation = () => (
  <Link to='/data' className="pt-button pt-minimal pt-icon-database" tabIndex="0" role="button">
    Data by country
  </Link>
);

export default DataNavigation;
