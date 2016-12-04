import React from 'React';
import CountriesSearch from '../containers/CountriesSearch';
import { Link } from 'react-router';

export default function CountrySearch() {
  return (
    <Link to='/Search'>
      <CountriesSearch />
    </Link>
  );
}
