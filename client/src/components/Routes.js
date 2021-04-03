import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Store from "../pages/Store";
import Product from "../pages/Product";
import CartAddress from "../pages/CartAddress";

function Routes() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Store} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/product/:id" component={Product} />
					<Route exact path="/cart-address" component={CartAddress} />
				</Switch>
			</Router>
		</>
	);
}

export default Routes;