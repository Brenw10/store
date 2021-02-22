import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Product from '../services/Product';

function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const Promise = category ? Product.getByCategory(category) : Product.getAll();
    Promise.then(({ data }) => setProducts(data));
  }, [category]);

  return (
    <>
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="py-3 ml-3">{products.length} Produtos</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group mx-3 mt-3 mt-lg-0">
            <input type="text" placeholder="Procurar..." className="form-control" />
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        {
          products.map(product =>
            <div className="col-xl-4 col-sm-6 p-3" key={product._id}>
              <ProductCard product={product} />
            </div>
          )
        }
      </div>
    </>
  );
}

export default ProductGrid;