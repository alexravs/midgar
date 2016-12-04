import React from 'react';

const PrecisionBar = ({precision, onPrecisionChange}) => (
  <input type="range"  min="0" max="100" value={precision} onChange={onPrecisionChange} />
);

export default PrecisionBar;
