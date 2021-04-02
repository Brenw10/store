import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Store from "../pages/Store";
import Product from "../pages/Product";

function Routes() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Store} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/product/:id" component={Product} />
				</Switch>
			</Router>
		</>
	);
}

export default Routes;