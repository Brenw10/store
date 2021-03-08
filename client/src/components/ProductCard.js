import '../styles/product-card.css';
import { ENDPOINT } from '../constants/Api';

function ProductCard({ product }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column justify-content-end text-center">
        <img className="img-fluid mb-3" width="100%" src={ENDPOINT + product.images[0]} alt={product.name} />
        <p>{product.name}</p>
        <h3>R$ {Number(product.price).toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default ProductCard;