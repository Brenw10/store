import { useCart } from '../contexts/Cart';
import CartItem from './CartItem';

function CartGrid() {
  const {
    products,
    getQuantity,
    clear,
    getTotalPrice,
  } = useCart();

  return (
    <div>
      <div>
        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {getQuantity() > 0 && products.map((value, i) => <CartItem key={i} product={value} />)}
            {
              getQuantity() === 0 &&
              <div className="p-3 text-center text-muted">
                Seu carrinho esta vazio
              </div>
            }
          </div>
          {
            getQuantity() > 0 &&
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Itens Totais</p>
                <h4 className=" mb-3 txt-right">{getQuantity()}</h4>
                <p className="mb-1">Valor Total</p>
                <h3 className="m-0 txt-right">R$ {getTotalPrice().toFixed(2)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button type="button" className="btn btn-primary">FINALIZAR COMPRA</button>
                  <button type="button" className="btn btn-outlineprimary btn-sm" onClick={() => clear()}>LIMPAR</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default CartGrid;