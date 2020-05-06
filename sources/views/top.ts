import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config() {
		return { type: 'line',
            rows: [
				{ type: 'header', css: 'webix_dark', template: 'top', localId: 'top' },
				{ type: 'toolbar',
					cols: [
						{ view: 'button', label: 'next', click: () => this.next() }
					]
				},
				{ padding: 5,
                    rows: [
                    	{ $subview: true }
                    ]
				}
			]
		};
	}

	next() {
		let url = this.getUrlString();
		if (url == 'top') {
			url = '/top/page1';
		} else {
			let num: number = parseInt(url.substr(8));
			if (num == 10) {
				num = 0;
			}
			url = '/top/page' + (num + 1).toString();
		}
		this.show(url);
	}
}