import React from 'react';

function StoreLogo({ title, description }) {
  return (
    <div className="text-center mt-5">
      <h1>{title?.toUpperCase()}</h1>
      <p>{description}</p>
    </div>
  );
}

export default StoreLogo;