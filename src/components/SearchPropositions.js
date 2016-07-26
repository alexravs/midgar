import React from 'react';
import Proposition from './Proposition.js';

function renderProposition(proposition) {
  return (
    <li>{ proposition }</li>
  );
}

export default function SearchPropositions({ propositions, onPropositionClick }) {
  return (
    <ul>
      {propositions.map((proposition) =>
        <Proposition
          key={`proposition-${proposition.id.videoId}`}
          onClick={() => {
            console.log("coucou");
            onPropositionClick(
              proposition.id.videoId,
              proposition.snippet.title);
          }}
          title={proposition.snippet.title}
        />
      )}
    </ul>
  );
}
