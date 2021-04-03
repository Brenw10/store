import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductInformation from '../components/ProductInformation';
import Logo from '../components/Logo';
import ProductService from '../services/Product';
import { useUser } from '../contexts/User';
import Modal from 'react-modal';
import ProductManager from '../components/ProductManager';

function Product() {
  const [product, setProduct] = useState();
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line
  }, [id]);

  function loadProduct() {
    ProductService
      .getById(id)
      .then(({ data }) => setProduct(data));
  }

  function onClose() {
    setModal(false);
    loadProduct();
  }

  function renderAdmin() {
    return <button type="button" onClick={() => setModal(true)}
      className="btn btn-danger rounded-circle position-fixed float-right-button m-3">+</button>;
  }

  return (
    <>
      <Header />
      <Logo title={product?.name} description="Detalhes do Produto" />
      {product && <ProductInformation product={product} />}
      {user?.isAdmin && renderAdmin()}
      <Modal isOpen={modal} style={customStyles}>
        <button type="button" onClick={() => setModal(false)}
          className="btn position-absolute close-button">x</button>
        <ProductManager onClose={onClose} product={product} />
      </Modal>
      <Footer />
    </>
  );
}

const customStyles = {
  content: {
    width: '70%',
    height: '70%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
};

export default Product;