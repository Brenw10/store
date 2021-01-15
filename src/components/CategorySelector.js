import { useState } from 'react';

function CategorySelector() {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  const categories = [
    {
      id: 1,
      name: "Acessórios",
      subcategories: [
        {
          id: 1,
          name: "Brincos",
        },
        {
          id: 2,
          name: "Colares",
        },
        {
          id: 3,
          name: "Pulseiras",
        },
      ],
    },
    {
      id: 2,
      name: "Camisas",
      subcategories: [
        {
          id: 1,
          name: "Quente",
        },
        {
          id: 2,
          name: "Manga Média",
        },
        {
          id: 3,
          name: "Regatas",
        },
      ],
    },
    {
      id: 3,
      name: "Calças"
    },
    {
      id: 4,
      name: "Moletons"
    },
    {
      id: 5,
      name: "Mães"
    },
    {
      id: 6,
      name: "Casacos"
    },
    {
      id: 7,
      name: "Crianças"
    },
    {
      id: 8,
      name: "Bebês"
    },
  ];

  const onClickCategory = value => {
    if (value === category) {
      setCategory();
      setSubCategory();
    } else {
      setCategory(value);
      setSubCategory();
    }
  }

  const onClickSubCategory = value => {
    if (value === subCategory) {
      setSubCategory();
    } else {
      setSubCategory(value);
    }
  }

  const renderSubCategory = category => {
    return category.map((value, i) =>
      <button onClick={() => onClickSubCategory(value.id)}
        key={i} type="button"
        className={`btn btn-light w-100 p-3 ${value.id === subCategory && "active"}`}>
        {value.name.toUpperCase()}
      </button>
    )
  }

  return (
    <>
      {
        categories.map((value, i) =>
          <>
            <button onClick={() => onClickCategory(value.id)}
              key={i} type="button"
              className={`btn btn-light w-100 p-3 ${value.id === category && "active"}`}>
              {value.name.toUpperCase()}
            </button>
            <div className="card">
              {value.subcategories && value.id === category && renderSubCategory(value.subcategories)}
            </div>
          </>
        )
      }
    </>
  );
}

export default CategorySelector;