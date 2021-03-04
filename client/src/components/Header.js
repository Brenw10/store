import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css'
import { useCart } from '../contexts/Cart';

function Header() {
	const { getAllBuy } = useCart();

	return (
		<header>
			<Link to='/'>Loja</Link>
			<Link to='/about'>Sobre</Link>
			<Link to='/cart'>Carrinho ({getAllBuy()})</Link>
		</header>
	);
}

export default Header;