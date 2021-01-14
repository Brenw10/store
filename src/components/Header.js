import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {
	return (
		<header>
			<Link to='/'>Loja</Link>
			<Link to='/about'>Sobre</Link>
			<Link to='/cart'>Carrinho (0)</Link>
		</header>
	);
}

export default Header;