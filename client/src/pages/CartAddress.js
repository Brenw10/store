import React, { useEffect, useState } from 'react';
import Address from '../components/Address';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { useUser } from '../contexts/User';
import { useCart } from '../contexts/Cart';
import User from '../services/User';

function CartAddress() {
  const [userAddress, setUserAddress] = useState();
  const { user } = useUser();
  const { getTotalBuying } = useCart();

  useEffect(() => {
    if (user?.tokenId) User.get(user.tokenId).then(({ data }) => setUserAddress(data.address));
  }, [user]);

  function onFinalize(address) {
    User.setAddress(user.tokenId, address);
  }

  return (
    <>
      <Header />
      <Logo title='Endereço de Envio' description="Detalhes do envio" />
      <div className="container">
        <Address
          button='FINALIZAR COMPRA' populate={userAddress}
          disabled={!user || !getTotalBuying()} onClick={onFinalize}
        />
      </div>
      <Footer />
    </>
  )
}

export default CartAddress;