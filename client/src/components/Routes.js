import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Store from "../pages/Store";
import Product from "../pages/Product";
import GoogleLogin from 'react-google-login';
import { GOOGLE_AUTH } from '../constants/Api';
import User from '../services/User';
import { useUser } from '../contexts/User';

function Routes() {
	const { user, setUser } = useUser();

	function onSignIn({ tokenId }) {
		User
			.get(tokenId)
			.then(({ data }) => setUser({ ...data, tokenId }));
	}

	function renderLogin() {
		return <GoogleLogin className="position-fixed float-right-button" onSuccess={onSignIn}
			clientId={GOOGLE_AUTH} buttonText="" cookiePolicy={'single_host_origin'} />;
	}

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Store} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/about" component={About} />
					<Route exact path="/product/:id" component={Product} />
				</Switch>
			</Router>
			{!user && renderLogin()}
		</>
	);
}

export default Routes;