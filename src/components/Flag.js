import React from 'react';
var flag = require('emoji-flag');

const Flag = ({ alpha2code }) => (
  <span className='flag'>{ flag(alpha2code) }</span>
);

export default Flag;
