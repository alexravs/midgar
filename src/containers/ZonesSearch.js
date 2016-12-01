import React from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import { receiveSearchResult } from '../actions/index';
import { searchZones } from '../actions/search';

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchKeyword,
    type: 'zone',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleValueChange: (e) => {
      const searchTerm = e.target.value.toLowerCase();
      console.log("term searched:", searchTerm);
      dispatch(searchZones(searchTerm));
    }
  }
}

const ZonesSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default ZonesSearch;
