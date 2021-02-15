import '../styles/product-card.css';
import { useCart } from '../contexts/Cart';

function ProductCard(props) {
  const { add, setQuantity, get } = useCart();

  return (
    <div className="card card-body">
      <img className="img-fluid" src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <h3 className="text-left">R$ {props.product.price}</h3>
      <div className="text-right">
        {
          get(props.product.id)
            ? <button className="btn btn-outline-dark btn-sm" onClick={() => setQuantity(props.product, props.product.quantity + 1)}>ADICIONAR MAIS</button>
            : <button className="btn btn-dark btn-sm" onClick={() => add(props.product)}>ADICIONAR NO CARRINHO</button>
        }
      </div>
    </div>
  );
}

export default ProductCard;