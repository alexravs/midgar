import React from 'react';
import { connect } from 'react-redux';
import SearchPropositions from '../components/searchPropositions';
import { fetchYoutubeMp3, setTrack } from '../actions/index';


function mapStateToProps(state) {
  const fakeSearchResult = {
    isFetching: false,
    searchQuery: '',
    items: state.searchResult.items,
    // items: [
    //   {snippet: { title: 'Mura Masa - Firefly' } },
    //   {snippet: { title: 'Daft Punk - One More Time'} }
    // ],
  }
  return {
    resultPropositions: fakeSearchResult,
    searchQuery: state.searchQuery,
  };
}

export class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropositionClick = this.handlePropositionClick.bind(this);
  }

  handlePropositionClick(videoId, title) {
    console.log("handling");
    const { dispatch } = this.props;
    dispatch(fetchYoutubeMp3(videoId, title));
  }

  render() {
    const { items, isFetching, searchQuery } = this.props.resultPropositions;
    return (
      <div>
        { isFetching && <p>Loading</p>}
        {
          (!isFetching && items.length > 0) &&
          <SearchPropositions
            propositions={items}
            searchQuery={searchQuery}
            onPropositionClick={this.handlePropositionClick}
          />
        }
        {
          (!isFetching && items.length === 0) &&
          <p> Nothing found for { searchQuery } </p>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Youtube);
