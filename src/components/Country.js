import React from 'react';
import { connect } from 'react-redux';
import Flag from './Flag';
import { getCountryName, getCountry } from '../reducers/geojsons';
import styled from 'styled-components';
import { Link } from 'react-router';

var flag = require('emoji-flag');

const Title = styled.h1`
  margin: 15px;
  font-size: 2em;
  text-align: center;
  color: rgba(127, 140, 141,1.0);
`;

const LinksWrapper = styled.ul`
  list-style-type: none;
`;

const Country = ({ countryName, countryCode, flag, children }) => (
  <div>
    <Title>{ flag } { ' ' } { countryName }</Title>
    <div className='row'>
      <div className='col-xs-2'>
        <LinksWrapper>
          <li>
            <Link to={`/data/${countryCode}`}>
              <span className='pt-icon-list' />
            </Link>
          </li>
          <li>
            <Link to={`/data/${countryCode}/search`}>
              <span className="pt-icon pt-icon-search"></span>
            </Link>
          </li>
        </LinksWrapper>
      </div>
      <div className='col-xs-10'>
        { children }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, { params: { code }, location: { query }, children }) => ({
  countryName: getCountryName(state, code),
  countryCode: code,
  flag: flag(query.alpha2code),
  children,
});

export default connect(mapStateToProps)(Country);
