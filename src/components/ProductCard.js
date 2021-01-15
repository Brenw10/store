import '../styles/product-card.css';
import { useCart } from '../contexts/Cart';

function ProductCard(props) {
  const { add, increase, getProduct } = useCart();

  return (
    <div className="card card-body">
      <img className="img-fluid" src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <h3 className="text-left">R$ {props.product.price}</h3>
      <div className="text-right">
        {
          getProduct(props.product.id)
            ? <button className="btn btn-outline-dark btn-sm" onClick={() => increase(props.product)}>ADICIONAR MAIS</button>
            : <button className="btn btn-dark btn-sm" onClick={() => add(props.product)}>ADICIONAR NO CARRINHO</button>
        }
      </div>
    </div>
  );
}

export default ProductCard;