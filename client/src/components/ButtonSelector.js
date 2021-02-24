import React, { useState } from 'react';

function ButtonSelector({ values, field, onSelect }) {
  const [selected, setSelected] = useState();

  function onClick(value) {
    setSelected(value);
    onSelect(value);
  }

  return values.map((value, i) =>
    <button key={i}
      className={`btn btn-outline-dark mx-2 ${value === selected ? 'active' : ''}`}
      onClick={() => onClick(value)}>
      {value[field]}
    </button>
  );
}

export default ButtonSelector;