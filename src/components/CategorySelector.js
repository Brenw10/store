import { useState } from 'react';

function CategorySelector() {
  const [category, setCategory] = useState();

  const categories = [
    "Acessórios",
    "Camisas",
    "Calças",
    "Moletons",
    "Mães",
    "Casacos",
    "Crianças",
    "Bebês",
  ];

  const onClickCategory = value => {
    if (value === category) {
      setCategory();
    } else {
      setCategory(value);
    }
  }

  return (
    <>
      {
        categories.map((value, i) =>
          <button onClick={() => onClickCategory(value)}
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