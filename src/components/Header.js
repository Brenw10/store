import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css'
import cart from '../services/cart';

function Header() {
	const [products, setProducts] = useState(cart.get());

	return (
		<header>
			<Link to='/'>Loja</Link>
			<Link to='/about'>Sobre</Link>
			<Link to='/cart'>Carrinho ({products.reduce((prev, value) => prev + value.amount, 0)})</Link>
		</header>
	);
}

export default Header;