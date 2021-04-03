import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../contexts/Cart';
import { useUser } from '../contexts/User';
import LoginButton from './LoginButton';

function Header() {
	const { getTotalBuying } = useCart();
	const { user } = useUser();

	return (
		<header className="text-center m-3">
			<Link to='/' className="text-decoration-none text-dark mx-3">
				Loja
			</Link>
			<Link to='/cart' className="text-decoration-none text-dark mx-3">
				Carrinho ({getTotalBuying()})
			</Link>
			{!user && <LoginButton />}
		</header>
	);
}

export default Header;