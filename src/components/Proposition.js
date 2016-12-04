import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

import '../../css/proposition.scss';

var flag = require('emoji-flag');
const Wrapper = styled.div`
  border-left: 5px solid rgba(52, 152, 219,1.0);
`
const renderItems = (items) => items.map((item) => (<li>{item}</li>));

function Proposition({ name, capital, region, alpha2Code, onClick, isFetching, imported }) {
  return (
    <div className='row' onClick={onClick}>
      <Wrapper className='proposition pt-button pt-minimal'>
        <div className='col-xs-12'>
          <div className='col-xs-2'>
            <span className='flag'>{ flag(alpha2Code) }</span>
          </div>
          <div className='col-xs-8'>
            <span><strong>{ name }</strong>, <i>{ capital }</i></span>
            <p>{ region }</p>
          </div>
          <div className='col-xs-1'>
            <span className='pt-icon-info-sign' />
          </div>
          <div className='col-xs-1'>
            { isFetching && <Spinner className='pt-small' /> }
            { imported && <span className='pt-icon-small-tick' /> }
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

const mapStateToProps = (state, { alpha3Code }) => {
  const code = alpha3Code.toLowerCase();
  const country = state.geojsons.byCode[code]

  return ({
    isFetching: country && country.isFetching,
    imported: country && country.data.length > 0
  })
}

export default connect(mapStateToProps)(Proposition);
