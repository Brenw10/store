import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Logo from "../components/Logo";

function Store() {
	return (
		<>
			<Header />
			<Logo title="Duo" description="Todos os estilos" />
			<div className="container">
				<ProductGrid />
			</div>
			<Footer />
		</>
	);
}

export default Store;