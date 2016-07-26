import React from 'react';

export default function Track({title, onClick}) {
  return (
    <li onClick={onClick}>{title}</li>
  );
}
