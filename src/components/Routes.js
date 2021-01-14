import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "../pages/Store";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Store} />
			</Switch>
		</Router>
	);
}

export default Routes;