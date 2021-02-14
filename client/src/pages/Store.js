import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import CategorySelector from "../components/CategorySelector";
import Logo from "../components/Logo";
import '../styles/store.css';

function Store() {
	return (
		<>
			<Header />
			<Logo title="Duo" description="O seu shop online!" />
			<div className="row">
				<div className="col-lg-2">
					<div className="category-container">
						<CategorySelector />
					</div>
				</div>
				<div className="col-lg-8">
					<ProductGrid />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Store;