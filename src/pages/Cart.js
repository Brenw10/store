import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import CartGrid from "../components/CartGrid";

function Cart() {
	return (
		<>
			<Header />
			<Logo title="Carrinho" description="Veja suas compras" />
			<div className="container">
				<CartGrid />
			</div>
			<Footer />
		</>
	);
}

export default Cart;