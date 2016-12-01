import React from 'react';
import BrandName from './BrandName';
import CountrySearch from './CountrySearch';
import DataNavigation from './DataNavigation';
import styled from 'styled-components';

const LinkNavigation = styled.div`
  ${''/* background: rgba(189, 195, 199,1.0);
  border-right: 1px solid white;
  padding: 3px;*/}
`;

const Navigation = () => (
  <div className='row'>
    <div className='col-xs-2'>
      <BrandName />
    </div>
    <LinkNavigation className='col-xs-5'>
      <CountrySearch />
    </LinkNavigation>
    <LinkNavigation className='col-xs-5'>
      <DataNavigation />
    </LinkNavigation>
  </div>
);

export default Navigation;
