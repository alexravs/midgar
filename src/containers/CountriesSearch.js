import React from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import countries from '../data/countries.json';
import { receiveSearchResult } from '../actions/index';

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchKeyword,
    type: 'country'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleValueChange: (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchTerm);
      });
      dispatch(receiveSearchResult(searchTerm, filtered))
    }
  }
}

const CountriesSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default CountriesSearch;
