import React from 'react';

export default function Search({ searchValue, handleValueChange }) {
  return (
    <input value={searchValue} onChange={handleValueChange} />
  );
}
