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

function Product() {
  const [product, setProduct] = useState();
  const [size, setSize] = useState();
  const { id } = useParams();

  useEffect(() => {
    ProductService
      .getById(id)
      .then(({ data }) => setProduct(data));
  }, [id]);

  function renderSizes() {
    const values = product.sizes.filter(value => value.quantity);
    return <ButtonSelector values={values} field='name' onSelect={value => setSize(value)} />
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
            </div>
          </div>
          <div className="col-lg-8">
            <Editor readOnly={true} value={product.description} defaultValue={product.description} />
          </div>
        </div>
      </div>
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