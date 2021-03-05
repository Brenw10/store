import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductService from '../services/Product';
import Editor from "rich-markdown-editor";
import { ENDPOINT } from '../constants/Api';
import SimpleImageSlider from "react-simple-image-slider";
import ButtonSelector from '../components/ButtonSelector';
import { useCart } from '../contexts/Cart';

function Product() {
  const [product, setProduct] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const { id } = useParams();
  const { get, add, setSize } = useCart();

  useEffect(() => {
    ProductService
      .getById(id)
      .then(({ data }) => setProduct(data));
  }, [id]);

  function renderSizes() {
    const currentProduct = get(product._id) || product;
    const values = currentProduct.sizes.filter(value => value.quantity);
    return <ButtonSelector values={values} field='name' onSelect={value => setSelectedSize(value)} />
  }

  function setProductSize(buy) {
    if (!get(product._id)) add(product);
    setSize(product, selectedSize, buy);
    setSelectedSize();
  }

  function renderCartButtons() {
    return (
      selectedSize && selectedSize.buy
        ?
        <button className='btn btn-danger mt-3 w-100' disabled={!selectedSize}
          onClick={() => setProductSize(0)}>REMOVER NO CARRINHO</button>
        :
        <button className='btn btn-dark mt-3 w-100' disabled={!selectedSize}
          onClick={() => setProductSize(1)}>ADICIONAR NO CARRINHO</button>
    )
  }

  function renderProduct() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="d-flex flex-column align-items-center text-center">
              <SimpleImageSlider
                width={300} height={300}
                showNavs={true} useGPURender={true}
                images={product.images.map(image => ({ url: ENDPOINT + image }))}
              />
              <label className="text-muted mt-3">Opções:</label>
              <div>{renderSizes()}</div>
              {renderCartButtons()}
            </div>
          </div>
          <div className="col-lg-8">
            <Editor readOnly={true} value={product.description} defaultValue={product.description} />
          </div>
        </div>
      </div >
    );
  }

  return (
    <>
      <Header />
      <Logo title={product ? product.name : ''} description="Detalhes do Produto" />
      {product && renderProduct()}
      <Footer />
    </>
  );
}

export default Product;