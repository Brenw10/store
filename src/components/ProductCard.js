import '../styles/product-card.css';

function ProductCard() {
  return (
    <div className="card card-body">
      <img className="img-fluid" src='/img/product-test.jpg' alt="Nome da Imagem" />
      <p>Nome do Produto</p>
      <h3 className="text-left">R$ 100,00</h3>
      <div className="text-right">
        <button className="btn btn-primary btn-sm">ADICIONAR NO CARRINHO</button>
      </div>
    </div>
  );
}

export default ProductCard;