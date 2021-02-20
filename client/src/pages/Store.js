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
			<div className="row no-gutters">
				<div className="col-lg-3 justify-content-center d-none d-lg-flex">
					<div className="category-container-desktop">
						<CategorySelector />
					</div>
				</div>
				<div className="col-lg-3 d-lg-none">
					<CategorySelector />
				</div>
				<div className="col-xl-6 col-lg-8">
					<ProductGrid />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Store;