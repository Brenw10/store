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
    const values = product.sizes.filter(value => value.quantity);
    return <ButtonSelector values={values} field='name' onSelect={value => setSelectedSize(value)} />
  }

  function setProductBuy(buy) {
    if (!get(product._id)) add(product);
    setSize(product, selectedSize, buy);
    setSelectedSize();
  }

  function renderCartButtons() {
    const currentProduct = get(product._id) || product;
    const size = selectedSize && currentProduct.sizes.find(value => value._id === selectedSize._id);
    return (
      size && size.buy
        ?
        <button className='btn btn-danger mt-3 w-100' disabled={!selectedSize}
          onClick={() => setProductBuy(0)}>REMOVER NO CARRINHO</button>
        :
        <button className='btn btn-dark mt-3 w-100' disabled={!selectedSize}
          onClick={() => setProductBuy(1)}>ADICIONAR NO CARRINHO</button>
    )
  }

  function renderProduct() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="d-flex flex-column align-items-center text-center mb-3">
              <SimpleImageSlider
                width={300} height={300}
                showNavs={true} useGPURender={true}
                images={product.images.map(image => ({ url: ENDPOINT + image }))}
              />
              <label className="text-muted mt-3">Opções:</label>
              <div>{renderSizes()}</div>
              <h3 className="mt-2">R$ {Number(product.price).toLocaleString()}</h3>
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