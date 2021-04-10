import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from './Icons';
import { ENDPOINT } from '../constants/Api';
import { useCart } from '../contexts/Cart';

function CartItem({ product, size, onClick }) {
  const { setBuying } = useCart();

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2 pointer" onClick={() => onClick(product, size)}>
        <img
          alt={product.name}
          style={{ margin: "auto", maxHeight: "50px" }}
          src={ENDPOINT + product.images[0]} className="img-fluid d-block" />
      </div>
      <div className="col-sm-4 p-2 pointer" onClick={() => onClick(product, size)}>
        <h5 className="mb-1">{product.name} - {size.name}</h5>
        <p className="mb-1">Preço: R${Number(product.price).toLocaleString()}</p>
        {size.buying > size.quantity && <small class="text-danger">Quantidade indisponível</small>}
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Qtd: {size.buying}</p>
        <p className="mb-0">Opção: {size.name}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button onClick={() => setBuying(product, size, size.buying + 1)}
          className="btn btn-dark btn-sm mr-2 mb-1">
          <PlusCircleIcon width={"20px"} />
        </button>
        <button className="btn btn-danger btn-sm mb-1" onClick={() => setBuying(product, size, size.buying - 1)}>
          {size.buying === 1 ? <TrashIcon width={"20px"} /> : <MinusCircleIcon width={"20px"} />}
        </button>
      </div>
    </div>
  );
}

export default CartItem;