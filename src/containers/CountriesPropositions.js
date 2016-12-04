import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SearchPropositions from '../components/searchPropositions';
import { fetchGeojsons, selectCountry } from '../actions/geojsons';
import { fetchYoutubeMp3, setTrack } from '../actions/index';

function mapStateToProps(state,) {
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

const mapDispatchToProps = (dispatch, { router }) => ({
  goToSelectedCountry: (code) => {
    dispatch(selectCountry(code));
    dispatch(fetchGeojsons(code)).then(() => {
      console.log("code ?", code);
      router.push({pathname: `/data/${code}`})
    });
  },
})

export class CountriesPropositions extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropositionClick = this.handlePropositionClick.bind(this);
  }

  handlePropositionClick(code) {
    this.props.goToSelectedCountry(code);

  }

  render() {
    const { items, isFetching, searchQuery } = this.props.resultPropositions;
    return (
      <div>
        {
          (items.length > 0) &&
          <SearchPropositions
            propositions={items}
            searchQuery={searchQuery}
            onPropositionClick={this.handlePropositionClick}
          />
        }
        {
          (items.length === 0) &&
          <p> Nothing found for { searchQuery } </p>
        }
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(CountriesPropositions));
