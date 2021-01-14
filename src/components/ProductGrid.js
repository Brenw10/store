import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">10 Produtos</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input type="text" placeholder="Procurar Produto" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
          <div className="col-sm-4 p-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductGrid;