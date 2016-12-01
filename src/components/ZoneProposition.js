import React from 'react';
import { getCountryLevels } from '../reducers/geojsons';
import _ from 'underscore';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border-left: 5px solid white;
  padding: 10px;

  &:hover {
    border-left: 5px solid rgba(52, 152, 219,1.0);
  }
`;

const RightSide = styled.div`
  text-align: right;
`

const RegionName = styled.span`
  font-size: 20px;
  font-weight: bold;
`

import { connect } from 'react-redux';

const ZoneProposition = ({ names, type, onPropositionClick }) => (
  <Wrapper onClick={onPropositionClick} className='' role='button'>
    <div className='row'>
      <div className='col-xs-8'>
        <ul className="pt-breadcrumbs">
          {
            names.map((name, index) => {
              if (index !== 0 && index < names.length - 1) return (
                <li>
                  <a className={`pt-breadcrumb`} href="#">{name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
      <RightSide className='col-xs-4'>
        <span>{type}</span>
        <br />
        <RegionName>{names[names.length - 1]}</RegionName>
      </RightSide>
    </div>
  </Wrapper>
);

const getNames = (zone, levels) => {
  const names = levels.map((level) => `NAME_${level}`);
  const keys = _.intersection(names, Object.keys(zone.properties))
  return keys.map((key) => zone.properties[key]);
}

const mapStateToProps = (state, { zone, onPropositionClick }) => {
  const names = getNames(zone, getCountryLevels(state));
  return {
    names,
    onPropositionClick,
    type: zone.properties[`ENGTYPE_${names.length - 1}`],
  };
};

export default connect(mapStateToProps)(ZoneProposition);
