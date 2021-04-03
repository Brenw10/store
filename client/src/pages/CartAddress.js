import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';

function CartAddress() {
  return (
    <>
      <Header />
      <Logo title='Endereço de Envio' description="Detalhes do envio" />
      <div className="container">hello</div>
      <Footer />
    </>
  )
}

export default CartAddress;