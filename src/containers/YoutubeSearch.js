import React from 'react';
import Playlist from '../components/Playlist';
import Search from '../components/Search';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../actions/index';

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchKeyword,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleValueChange: (e) => {
      dispatch(fetchSearchResult(e.target.value));
      console.log(e.target.value);
    }
  }
}

const YoutubeSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default YoutubeSearch;
