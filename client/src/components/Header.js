import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../contexts/Cart';
import GoogleLogin from 'react-google-login';
import { GOOGLE_AUTH } from '../constants/Api';
import User from '../services/User';
import { useUser } from '../contexts/User';

function Header() {
	const { getAllBuy } = useCart();
	const { user, setUser } = useUser();

	async function onSignIn({ tokenId }) {
		await User.create(tokenId);
		User.get(tokenId).then(({ data }) => setUser({ ...data, tokenId }));
	}

	function renderLogin() {
		return (
			<GoogleLogin clientId={GOOGLE_AUTH} onSuccess={onSignIn} cookiePolicy={'single_host_origin'}
				render={renderProps =>
					<button type="button" disabled={renderProps.disabled}
						onClick={renderProps.onClick} className="btn">FAZER LOGIN</button>
				}
			/>
		);
	}

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
			{!user && renderLogin()}
		</header>
	);
}

export default Header;