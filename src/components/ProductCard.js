import '../styles/product-card.css';
import cart from '../services/cart';

function ProductCard(props) {
  return (
    <div className="card card-body">
      <img className="img-fluid" src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <h3 className="text-left">R$ {props.product.price}</h3>
      <div className="text-right">
        <button className="btn btn-primary btn-sm" onClick={() => cart.setItem(props.product)}>ADICIONAR NO CARRINHO</button>
      </div>
    </div>
  );
}

export default ProductCard;