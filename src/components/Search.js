import React from 'react';

export default function Search({ searchValue, handleValueChange, type }) {
  return (
    <div className="pt-input-group">
      <span className="pt-icon pt-icon-search"></span>
      <input
        value={searchValue}
        onChange={handleValueChange}
        className="pt-input"
        type="search"
        placeholder={`Search a ${type}`}
        dir="auto" />
    </div>
  );
}
