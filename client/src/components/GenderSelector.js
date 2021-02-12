import { useState } from 'react';

function GenderSelector() {
  const [gender, setGender] = useState();

  const genders = [
    "Homem",
    "Mulher",
  ];

  const onClickGender = value => {
    if (value === gender) {
      setGender();
    } else {
      setGender(value);
    }
  }

  return (
    <>
      {
        genders.map((value, i) =>
          <button onClick={() => onClickGender(value)}
            key={i} type="button"
            className={`btn btn-light w-100 p-3 ${value === gender && "active"}`}>
            {value.toUpperCase()}
          </button>
        )
      }
    </>
  );
}

export default GenderSelector;