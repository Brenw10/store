import React from 'react';

function SingleSelector({ values, display, selected, onSelect }) {
  return values.map((value, i) =>
    <button key={i} onClick={() => onSelect(value)}
      className={`btn btn-outline-dark m-2 ${value === selected && 'active'}`}>
      {value[display]}
    </button>
  );
}

export default SingleSelector;