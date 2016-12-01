import React from 'react';
import Proposition from './Proposition.js';

function renderProposition(proposition) {
  return (
    <li>{ proposition }</li>
  );
}

export default function SearchPropositions({ propositions, onPropositionClick }) {
  return (
    <div>
      {propositions.map((proposition) =>
        <div className='col-xs-12'>
          <Proposition
            onClick={() => {
              const code = proposition.alpha3Code.toLowerCase();
              onPropositionClick(code);
            }}
            {...proposition}
          />
        </div>
      )}
    </div>
  );
}
