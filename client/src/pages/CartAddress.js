import React from 'react';
import Address from '../components/Address';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { useUser } from '../contexts/User';
import { useCart } from '../contexts/Cart';

function CartAddress() {
  const { user } = useUser();
  const { getTotalBuying } = useCart();

  function onFinalize(address) {
    console.log(address);
  }

  return (
    <>
      <Header />
      <Logo title='Endereço de Envio' description="Detalhes do envio" />
      <div className="container">
        <Address
          button='FINALIZAR COMPRA'
          disabled={!user || !getTotalBuying()} onClick={onFinalize}
        />
      </div>
      <Footer />
    </>
  )
}

export default CartAddress;