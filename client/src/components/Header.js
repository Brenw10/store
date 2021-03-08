import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../contexts/Cart';

function Header() {
	const { getAllBuy } = useCart();

	return (
		<header className="text-center m-3">
			<Link to='/' className="text-decoration-none text-dark mx-3">
				Loja
			</Link>
			<Link to='/about' className="text-decoration-none text-dark mx-3">
				Sobre
			</Link>
			<Link to='/cart' className="text-decoration-none text-dark mx-3">
				Carrinho ({getAllBuy()})
			</Link>
		</header>
	);
}

export default Header;