import React from 'react';
import { Link } from 'react-router';

import '../../css/brand-name.scss';

const BrandName = () => (
  <Link to='/'>
    <span id='brand-name'>Midgar</span>
  </Link>
);

export default BrandName;
