import { JetApp, HashRouter } from "webix-jet";
import views from "@root/views";

declare var APPNAME, VERSION, PRODUCTION;

export default class App extends JetApp {
	constructor(config = {}) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top",
            views	: views.resolveviews
		};

		super({ ...defaults, ...config });
	}
}


webix.ready(() => {
	let app: JetApp = new App();
	app.render();
});

