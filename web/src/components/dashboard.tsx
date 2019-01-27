import {Component, h} from "preact";
import {Router} from "preact-router";

import Header from "./header";
// Code-splitting is automated for routes
import Home from "../routes/home";

import {DashboardState} from "./state";

export default class Dashboard extends Component<{}, DashboardState> {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header image="https://cdn.discordapp.com/avatars/106354106196570112/097e0f5e83f747e5ae684f9180eb6dba.png?size=128"/>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
					</Router>
				</div>
		);
	}
}
