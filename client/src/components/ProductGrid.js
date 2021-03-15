import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Product from '../services/Product';
import { Link } from "react-router-dom";
import { useUser } from '../contexts/User';

function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user && user.isAdmin)
      getProductsForAdmin();
    else
      getProductsForClient();
    // eslint-disable-next-line
  }, [category]);

  function getProductsForAdmin() {
    const Promise = category ? Product.getAllByCategory(user.tokenId, category) : Product.getAll(user.tokenId);
    Promise.then(({ data }) => setProducts(data));
  }

  function getProductsForClient() {
    const Promise = category ? Product.getForSaleByCategory(category) : Product.getAllForSale();
    Promise.then(({ data }) => setProducts(data));
  }

  return (
    <>
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="py-3 ml-3">{products.length} Produtos</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group mx-3 mt-3 mt-lg-0 shadow-sm">
            <input type="text" placeholder="Procurar..." className="form-control" />
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        {
          products.map(product =>
            <div className="col-xl-4 col-sm-6 p-3" key={product._id}>
              <Link to={`/product/${product._id}`} className="text-decoration-none">
                <ProductCard product={product} />
              </Link>
            </div>
          )
        }
      </div>
    </>
  );
}

export default ProductGrid;