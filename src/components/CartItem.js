import { useCart } from '../contexts/Cart';
import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from './Icons';

function CartItem(props) {
  const { increaseProduct, deleteProduct, decreaseProduct } = useCart();

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={props.product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={props.product.image} className="img-fluid d-block" />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">Product Name</h5>
        <p className="mb-1">Price: R${props.product.price} </p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Qtd: {props.product.quantity}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button onClick={() => increaseProduct(props.product)}
          className="btn btn-dark btn-sm mr-2 mb-1">
          <PlusCircleIcon width={"20px"} />
        </button>
        {
          props.product.quantity === 1
            ?
            <button onClick={() => deleteProduct(props.product)} className="btn btn-danger btn-sm mb-1">
              <TrashIcon width={"20px"} />
            </button>
            :
            <button onClick={() => decreaseProduct(props.product)} className="btn btn-danger btn-sm mb-1">
              <MinusCircleIcon width={"20px"} />
            </button>
        }
      </div>
    </div>
  );
}

export default CartItem;