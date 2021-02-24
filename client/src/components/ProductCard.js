import '../styles/product-card.css';
import { useCart } from '../contexts/Cart';
import { ENDPOINT } from '../constants/Api';

function ProductCard(props) {
  const { add, setQuantity, get } = useCart();

  return (
    <div className="card card-body">
      <img className="img-fluid" src={ENDPOINT + props.product.images[0]} alt={props.product.name} />
      <p>{props.product.name}</p>
      <h3 className="text-left">R$ {props.product.price.toFixed(2)}</h3>
      <div className="text-right">
        {
          get(props.product._id)
            ? <button className="btn btn-outline-dark btn-sm" onClick={() => setQuantity(props.product, get(props.product._id).quantity + 1)}>ADICIONAR MAIS</button>
            : <button className="btn btn-dark btn-sm" onClick={() => add(props.product)}>ADICIONAR NO CARRINHO</button>
        }
      </div>
    </div>
  );
}

export default ProductCard;