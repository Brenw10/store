import '../styles/product-card.css';
import { ENDPOINT } from '../constants/Api';

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column text-center">
        <img className="img-fluid mb-3" width="100%" src={ENDPOINT + product.images[0]} alt={product.name} />
        <div className="h-100 d-flex flex-column justify-content-end">
          <p>{product.name}</p>
          <h3>R$ {Number(product.price).toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;