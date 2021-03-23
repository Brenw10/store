import { useCart } from '../contexts/Cart';
import CartItem from './CartItem';
import { useUser } from '../contexts/User';
import { useHistory } from "react-router-dom";

function CartGrid() {
  const { cart, clear, getAllBuy, getTotal } = useCart();
  const { user } = useUser();
  const history = useHistory();

  function onClickProduct({ _id }) {
    history.push('/product/' + _id);
  }

  function renderItems() {
    return cart.map(item =>
      item.sizes
        .filter(size => size.buy)
        .map(size => <CartItem key={size._id} product={item} size={size} onClick={onClickProduct} />)
    );
  }

  return (
    <div className="row no-gutters justify-content-center">
      <div className="col-lg-9 p-3">
        {getAllBuy() > 0 ? renderItems() : <div className="p-3 text-center text-muted">Seu carrinho está vazio</div>}
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
              <button type="button" disabled={!user} className="btn btn-dark">FINALIZAR COMPRA</button>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => clear()}>LIMPAR</button>
              {!user && <p className="m-1 mt-3 text-muted">Faça Login antes para continuar</p>}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CartGrid;