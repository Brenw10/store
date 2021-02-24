import '../styles/product-card.css';
import { ENDPOINT } from '../constants/Api';

function ProductCard({ product, onClick }) {
  return (
    <div className="card shadow-sm pointer" onClick={() => onClick(product)}>
      <div className="card-body text-center">
        <img className="img-fluid" src={ENDPOINT + product.images[0]} alt={product.name} />
        <p>{product.name}</p>
        <h3>R$ {product.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default ProductCard;