import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from './Icons';
import { ENDPOINT } from '../constants/Api';

function CartItem({ product, size }) {
  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.name}
          style={{ margin: "auto", maxHeight: "50px" }}
          src={ENDPOINT + product.images[0]} className="img-fluid d-block" />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.name} - {size.name}</h5>
        <p className="mb-1">Preço: R${product.price.toFixed(2)} </p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Qtd: {size.buy}</p>
        <p className="mb-0">Opção: {size.name}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button
          className="btn btn-dark btn-sm mr-2 mb-1">
          <PlusCircleIcon width={"20px"} />
        </button>
        {
          size.buy === 1
            ?
            <button className="btn btn-danger btn-sm mb-1">
              <TrashIcon width={"20px"} />
            </button>
            :
            <button>
              <MinusCircleIcon width={"20px"} />
            </button>
        }
      </div>
    </div>
  );
}

export default CartItem;