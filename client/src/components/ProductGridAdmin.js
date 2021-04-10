import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Product from '../services/Product';
import { Link } from "react-router-dom";
import { useUser } from '../contexts/User';

function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const Promise = category ? Product.getAllByCategory(user.tokenId, category._id) : Product.getAll(user.tokenId);
    Promise.then(({ data }) => setProducts(data));
  }, [category, user]);

  function renderProductCard() {
    return products.map(product =>
      <div className="col-xl-4 col-sm-6 p-3" key={product._id}>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <ProductCard product={product} />
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="row no-gutters">
        <div className="col-sm-12">
          <div className="py-3 ml-3">{products.length} Produtos</div>
        </div>
      </div>
      <div className="row no-gutters">
        {renderProductCard()}
      </div>
    </>
  );
}

export default ProductGrid;