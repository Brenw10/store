import React, { useState } from 'react';
import Editor from "rich-markdown-editor";
import { ENDPOINT } from '../constants/Api';
import SimpleImageSlider from "react-simple-image-slider";
import SingleSelector from '../components/SingleSelector';
import { useCart } from '../contexts/Cart';

function ProductInformation({ product }) {
  const [selectedSize, setSelectedSize] = useState();
  const { getItem, addItem, setBuying } = useCart();

  function setProductBuying(buying) {
    if (!getItem(product._id)) addItem(product);
    setBuying(product, selectedSize, buying);
    setSelectedSize();
  }

  function renderCartButtons() {
    const currentProduct = getItem(product._id) || product;
    const size = currentProduct.sizes.find(value => value._id === selectedSize?._id);
    return size?.buying > 0
      ?
      <button className='btn btn-danger mt-3 w-100' disabled={!selectedSize}
        onClick={() => setProductBuying(0)}>REMOVER NO CARRINHO</button>
      :
      <button className='btn btn-dark mt-3 w-100' disabled={!selectedSize}
        onClick={() => setProductBuying(1)}>ADICIONAR NO CARRINHO</button>

  }

  function renderSizes() {
    const values = product.sizes.filter(value => value.quantity);
    return <SingleSelector values={values} field='name' onSelect={value => setSelectedSize(value)} />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <SimpleImageSlider width={300} height={300} showNavs={true} useGPURender={true}
              images={product.images.map(image => ({ url: ENDPOINT + image }))} />
            <label className="text-muted mt-3">Opções:</label>
            <div>{renderSizes()}</div>
            <h3 className="mt-2">R$ {Number(product.price).toLocaleString()}</h3>
            {renderCartButtons()}
          </div>
        </div>
        <div className="col-lg-8">
          <Editor readOnly={true} defaultValue={product.description} />
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;