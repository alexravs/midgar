import React from 'react';
import { connect } from 'react-redux';
import SearchPropositions from '../components/searchPropositions';
import { fetchGeojsons, selectCountry } from '../actions/geojsons';
import { fetchYoutubeMp3, setTrack } from '../actions/index';
import { loadGeojsonIntoMap } from '../actions/geojsons';
import ZoneProposition from '../components/ZoneProposition';

function mapStateToProps(state) {
  const fakeSearchResult = {
    isFetching: false,
    searchQuery: '',
    items: state.searchResult.items.slice(0, 5),
  }

  return {
    resultPropositions: fakeSearchResult,
    searchQuery: state.searchQuery,
  };
}

export class ZonesPropositions extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropositionClick = this.handlePropositionClick.bind(this);
  }

  handlePropositionClick(zone) {
    const { dispatch } = this.props;
    dispatch(loadGeojsonIntoMap(zone));
  }

  render() {
    const { items, isFetching, searchQuery } = this.props.resultPropositions;
    console.log("iteems: ", items);
    return (
      <div>
        {
          (items.length > 0) &&
          items.map((item) => (
            <ZoneProposition zone={item} onPropositionClick={() => { this.handlePropositionClick(item) }} />
          ))
        }
        {
          (items.length === 0) &&
          <p> Nothing found for { searchQuery } </p>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ZonesPropositions);
