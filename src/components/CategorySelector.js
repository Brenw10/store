import { useState } from 'react';

function CategorySelector() {
  const [category, setCategory] = useState();

  const categories = [
    "Homens",
    "Mulheres",
    "Mães",
    "Crianças",
    "Bebês",
  ];

  return (
    <>
      {
        categories.map((value, i) =>
          <button onClick={() => setCategory(value)}
            key={i} type="button"
            className={`btn btn-light w-100 p-3 ${value === category && "active"}`}>
            {value.toUpperCase()}
          </button>
        )
      }
    </>
  );
}

export default CategorySelector;