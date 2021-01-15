import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Logo from "../components/Logo";
import CategorySelector from "../components/CategorySelector";
import '../styles/store.css';

function Store() {
	return (
		<>
			<Header />
			<Logo title="Duo" description="Todos os estilos" />
			<div className="row">
				<div className="col-md-3">
					<div className="category-container">
						<CategorySelector />
					</div>
				</div>
				<div className="col-md-6">
					<ProductGrid />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Store;