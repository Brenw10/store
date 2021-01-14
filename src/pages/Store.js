import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import StoreLogo from "../components/StoreLogo";

function Store() {
	return (
		<>
			<Header />
			<StoreLogo />
			<div className="container">
				<ProductGrid />
			</div>
			<Footer />
		</>
	);
}

export default Store;