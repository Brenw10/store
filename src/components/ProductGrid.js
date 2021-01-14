import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const values = [
    {
      id: 1,
      name: 'Produto 1',
      image: '/img/product-test.jpg',
      price: 99.99,
    },
    {
      id: 2,
      name: 'Produto 2',
      image: '/img/product-test.jpg',
      price: 60.00,
    },
    {
      id: 3,
      name: 'Produto 3',
      image: '/img/product-test.jpg',
      price: 70.00,
    },
  ];
  const [products] = useState(values);

  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="py-3">10 Produtos</div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <input type="text" placeholder="Procurar..." className="form-control" />
        </div>
      </div>
      <div className="row">
        {
          products.map((product, i) =>
            <div className="col-sm-4 p-3" key={i}>
              <ProductCard key={i} product={product} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ProductGrid;