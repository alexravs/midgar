import React from 'react';

export default function Proposition({ title, onClick }) {
  return (
    <li onClick={onClick}>{ title }</li>
  );
}
