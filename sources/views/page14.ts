import {JetView} from "webix-jet";
import pop from "@root/views/pop";

export default class page13 extends JetView {
	private pop: pop;

	config() {
		return { view: 'form', localId: 'frm', elementsConfig: { labelWidth: 90 },
			rows: [
				{ view: 'toolbar', localId: 'tbr',
					cols: [
						{ view: 'label', template: ' ' },
						{ view: 'icon', icon: 'wxi-file', click: () => this.showPopup() }
					]
				},
				{}
			]
		};
	}

	init(view, url) {
		this.pop = this.ui(pop) as pop;
	}

	ready(view, url) {

	}

	destroy() {
		this.pop = null;
	}

	showPopup() {
		this.pop.showPopup();
	}



}