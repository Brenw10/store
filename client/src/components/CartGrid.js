import { useCart } from '../contexts/Cart';
import CartItem from './CartItem';
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import { GOOGLE_AUTH } from '../constants/Api';

function CartGrid() {
  const { cart, clear, getAllBuy, getTotal } = useCart();


  function onSignIn({ tokenId, profileObj }) {
    console.log(tokenId, profileObj)
  }

  function renderItems() {
    return cart.map(item => item.sizes
      .filter(size => size.buy)
      .map(size =>
        <Link to={`/product/${item._id}`} className="text-decoration-none" key={size._id}>
          <CartItem product={item} size={size} />
        </Link>
      )
    );
  }

  return (
    <div className="row no-gutters justify-content-center">
      <div className="col-lg-9 p-3">
        {
          getAllBuy() > 0
            ?
            renderItems()
            :
            <div className="p-3 text-center text-muted">Seu carrinho está vazio</div>
        }
      </div>
      {
        getAllBuy() > 0 &&
        <div className="col-lg-3 p-3">
          <div className="card card-body shadow-sm">
            <p className="mb-1">Itens Totais</p>
            <h4 className=" mb-3 txt-right">{getAllBuy()}</h4>
            <p className="mb-1">Valor Total</p>
            <h3 className="m-0 txt-right">R$ {Number(getTotal()).toLocaleString()}</h3>
            <hr className="my-4" />
            <div className="text-center">
              <GoogleLogin clientId={GOOGLE_AUTH} buttonText="Entrar com Google"
                cookiePolicy={'single_host_origin'} onSuccess={onSignIn}
                render={renderProps =>
                  <button type="button" disabled={renderProps.disabled}
                    onClick={renderProps.onClick} className="btn btn-dark">FINALIZAR COMPRA</button>
                }
              />
              <button type="button" className="btn btn-outline btn-sm" onClick={() => clear()}>LIMPAR</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CartGrid;