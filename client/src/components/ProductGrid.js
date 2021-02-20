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
    {
      id: 4,
      name: 'Produto 4',
      image: '/img/product-test.jpg',
      price: 20.00,
    },
    {
      id: 5,
      name: 'Produto 5',
      image: '/img/product-test.jpg',
      price: 30.00,
    },
    {
      id: 6,
      name: 'Produto 6',
      image: '/img/product-test.jpg',
      price: 50.00,
    },
    {
      id: 7,
      name: 'Produto 7',
      image: '/img/product-test.jpg',
      price: 50.00,
    },
    {
      id: 8,
      name: 'Produto 8',
      image: '/img/product-test.jpg',
      price: 50.00,
    },
    {
      id: 9,
      name: 'Produto 9',
      image: '/img/product-test.jpg',
      price: 50.00,
    },
  ];
  const [products] = useState(values);

  return (
    <>
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="py-3 ml-3">{products.length} Produtos</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group ml-3 mr-3">
            <input type="text" placeholder="Procurar..." className="form-control" />
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        {
          products.map((product, i) =>
            <div className="col-xl-4 col-sm-6 p-3" key={i}>
              <ProductCard key={i} product={product} />
            </div>
          )
        }
      </div>
    </>
  );
}

export default ProductGrid;