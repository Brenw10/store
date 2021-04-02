import { useEffect, useState } from 'react';
import Category from '../services/Category';
// todo: improve code
function CategorySelector(props) {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.getAll()
      .then(({ data }) => setCategories(data));
  }, []);

  const onClickCategory = value => {
    if (value === category) {
      setCategory();
      setSubCategory();
      props.setCategory();
    } else {
      setCategory(value);
      props.setCategory(value);
      setSubCategory();
    }
  }

  const onClickSubCategory = value => {
    if (value === subCategory) {
      setSubCategory();
      props.setCategory(category);
    } else {
      setSubCategory(value);
      props.setCategory(value);
    }
  }

  const renderSubCategory = category => {
    return category.map((value, i) =>
      <button onClick={() => onClickSubCategory(value._id)}
        key={i} type="button"
        className={`btn btn-light w-100 p-3 ${value._id === subCategory && "active"}`}>
        {value.name.toUpperCase()}
      </button>
    )
  }

  return categories.map((value, i) =>
    <div key={i}>
      <button onClick={() => onClickCategory(value._id)}
        type="button"
        className={`btn btn-light w-100 p-3 ${value._id === category && "active"}`}>
        {value.name.toUpperCase()}
      </button>
      <div className={`card ${value.categories.length && value._id === category && 'm-2'}`}>
        {value.categories && value._id === category && renderSubCategory(value.categories)}
      </div>
    </div>
  );
}

export default CategorySelector;