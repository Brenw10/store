import React, { useState } from 'react';

function TreeSelector({ items, onSelect, display, children }) {
  const [tree, setTree] = useState([]);

  function onTreeSelection(value, currentTree) {
    onSelect(value);
    setTree(currentTree);
  }

  function renderChildren(values, parents) {
    return (
      <div className='card'>
        {values.map((value, i) => <div key={i}>{renderItem(value, parents)}</div>)}
      </div>
    );
  }

  function renderItem(value, parents) {
    return (
      <>
        <button onClick={() => onTreeSelection(value, [...parents, value])} type="button"
          className={`btn btn-light w-100 p-3 ${tree.includes(value) && 'active'}`}>
          {value[display].toUpperCase()}
        </button>
        {
          value[children].length > 0 &&
          tree.includes(value) &&
          renderChildren(value[children], [...parents, value])
        }
      </>
    );
  }

  return items.map((value, i) => <div key={i}>{renderItem(value, [])}</div>);
}

export default TreeSelector;