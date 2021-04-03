import React, { useState } from 'react';

function SingleSelector({ values, field, onSelect }) {
  const [selected, setSelected] = useState();

  function onClick(value) {
    setSelected(value);
    onSelect(value);
  }

  return values.map((value, i) =>
    <button key={i} onClick={() => onClick(value)}
      className={`btn btn-outline-dark m-2 ${value === selected && 'active'}`}>
      {value[field]}
    </button>
  );
}

export default SingleSelector;